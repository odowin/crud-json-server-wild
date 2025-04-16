import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent, AsyncPipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  articles!: Article[];
  articleSubscription!: Subscription;

  private apiService: ApiService = inject(ApiService);

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }

  ngOnInit() {
    this.articleSubscription = this.apiService.getArticles()
      .subscribe((data) => {
        this.articles = data;
      });
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }
}
