import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);

  constructor() {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>('http://localhost:3000/articles/' + id);
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/articles', article);
  }

  updateArticle(articleId: number, article: Article): Observable<Article> {
    return this.http.put<Article>('http://localhost:3000/articles/' + articleId, article);
  }

  deleteArticle(articleId: number): Observable<Article> {
    return this.http.delete<Article>('http://localhost:3000/articles/' + articleId);
  }
}
