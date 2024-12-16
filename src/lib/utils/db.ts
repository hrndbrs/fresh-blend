import { readFile } from 'fs/promises';
import { dbPath } from '../constants/paths';
import { ServerError } from './exceptions';
import { HTTPErrorCode } from '../types/response.schema';
import type { BaseModel } from '../types/base.schema';

type ReadSingleOption = { id: number };
type ReadAllOption<T extends BaseModel> = {
  sort?: 'asc' | 'desc';
  orderBy?: keyof T;
};

type ReadOption<T extends BaseModel> = ReadAllOption<T> | ReadSingleOption;

export async function readDB<T extends BaseModel>(
  path: string,
  option: ReadSingleOption
): Promise<T>;
export async function readDB<T extends BaseModel>(
  path: string,
  option: ReadAllOption<T>
): Promise<T[]>;
export async function readDB<T extends BaseModel>(
  path: string,
  option: ReadOption<T>
): Promise<T | T[]> {
  const data = JSON.parse((await readFile(dbPath + path)).toString()) as T[];

  if ('id' in option) {
    const datum = data.find(({ id }) => id === option.id);

    if (!datum)
      throw new ServerError(
        HTTPErrorCode.NOT_FOUND,
        `Data of id ${option.id} is not found`
      );

    return datum;
  }

  const { orderBy = 'id', sort = 'asc' } = option;

  if (data.length === 0) return data;

  const sample = data[0][orderBy];

  if (+sample) {
    data.sort((a, b) => +a[orderBy] - +b[orderBy]);
  } else if (new Date(String(sample))) {
    data.sort((a, b) => {
      const curr = new Date(String(a[orderBy]));
      const next = new Date(String(b[orderBy]));

      return +curr - +next;
    });
  } else {
    data.sort();
  }

  if (sort === 'desc') data.reverse();

  return data;
}

export function getPagination<T>({
  data,
  page,
  limit,
}: {
  data: T[];
  page: number;
  limit: number;
}): [T[], number, number] {
  const start = (page - 1) * limit;
  const end = start + limit;

  const slicedData = structuredClone(data.slice(start, end));
  const totalRows = slicedData.length;
  const totalPages = Math.ceil(data.length / limit);

  return [slicedData, totalRows, totalPages];
}
