import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.model';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent {
  articleId!: number;
  article!: Article;
  articleSubscription!: Subscription;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private apiService: ApiService = inject(ApiService);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.articleSubscription = this.apiService.getArticleById(this.articleId).subscribe((data) => {
        this.article = data;
      });
    });
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }
}
