import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
    selector: 'MemberListComp',
    templateUrl: './MemberListComp.html',
    styleUrl: './MemberListComp.scss'
})
export class MemberListComp implements AfterViewInit {
    private _httpClient = inject(HttpClient);

    displayedColumns: string[] = ['number', 'created', 'state', 'title'];
    exampleDatabase: ExampleHttpDatabase | null;
    data: GithubIssue[] = [];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.exampleDatabase!.getRepoIssues(
                        this.sort.active,
                        this.sort.direction,
                        this.paginator.pageIndex,
                    ).pipe(catchError(() => of(null)));
                }),
                map(data => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.isRateLimitReached = data === null;

                    if (data === null) {
                        return [];
                    }
                    this.resultsLength = data.total_count;
                    return data.items;
                }),
            )
            .subscribe(data => (this.data = data));
    }
}

export interface GithubApi {
    items: GithubIssue[];
    total_count: number;
}

export interface GithubIssue {
    created_at: string;
    number: string;
    state: string;
    title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
    constructor(private _httpClient: HttpClient) { }

    getRepoIssues(sort: string, order: SortDirection, page: number): Observable<GithubApi> {
        const href = 'https://api.github.com/search/issues';
        const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1
            }`;

        // Mock response for testing
        const mockData: GithubApi = {
            items: [
            {
                created_at: new Date().toISOString(),
                number: '1',
                state: 'open',
                title: 'Sample Issue 1'
            },
            {
                created_at: new Date().toISOString(),
                number: '2',
                state: 'closed',
                title: 'Sample Issue 2'
            },
            {
                created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
                number: '3',
                state: 'open',
                title: 'Feature request: Add dark mode'
            },
            {
                created_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
                number: '4',
                state: 'closed',
                title: 'Bug fix: Table sorting doesn\'t work correctly'
            },
            {
                created_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
                number: '5',
                state: 'open',
                title: 'Documentation update needed for APIs'
            }
            ],
            total_count: 5
        };
        
        // For production, use this line instead:
        // return this._httpClient.get<GithubApi>(requestUrl);
        
        // Return mock data for testing
        return of(mockData);
    }
}
