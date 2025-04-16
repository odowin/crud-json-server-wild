import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-create-article-page',
  standalone: true,
  imports: [],
  templateUrl: './create-article-page.component.html',
  styleUrl: './create-article-page.component.scss',
})
export class CreateArticlePageComponent {
  newArticle: Article = {
    id: 0,
    title: 'Nouvel article',
    content: 'Nouvel article',
    image: 'Nouvel article',
    createdAt: new Date(),
    isPublished: true,
    likeCount: 300,
    categoryName: 'Angular',
    isLiked: false,
  };

  updatedArticle: Article = {
    id: 1,
    title: 'Nouvel article',
    content: 'Nouvel article',
    image: 'Nouvel article',
    createdAt: new Date(),
    isPublished: true,
    likeCount: 300,
    categoryName: 'Angular',
    isLiked: false,
  };

  private apiService: ApiService = inject(ApiService);

  createArticle() {
    this.apiService.createArticle(this.newArticle).subscribe((data) => {
      console.log(data);
    });
  }

  updateArticle() {
    this.apiService
      .updateArticle(this.updatedArticle.id, this.updatedArticle)
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteArticle() {
    this.apiService.deleteArticle(1).subscribe((data) => {
      console.log(data);
    });
  }
}
