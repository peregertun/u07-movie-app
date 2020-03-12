import { IResults } from './IResults';
export interface IMovie {
    id: number;
    title: string;
    total_results: number;
    results: IResults[];
}