import { MovieType } from "./movieTypes.ts";
import { PersonType } from "./personTypes.ts";
import { TvType } from "./tvTypes.ts";

export type RensponseTrendingMoviesType = {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
};

export type RensponseTrendingPeopleType = {
    page: number;
    results: PersonType[];
    total_pages: number;
    total_results: number;
};

export type RensponseTrendingTvType = {
    page: number;
    results: TvType[];
    total_pages: number;
    total_results: number;
};