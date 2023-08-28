import { Injectable } from '@angular/core';
import { Member } from './member'
import { MessageService } from './message.service';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';

@Injectable({
  //Injectable　このサービスを使える場所
  //providedIn: 'root'　アプリケーション全体で使うということ
  providedIn: 'root'
})
export class MemberService {

  //サービスを使う時にはコンストラクターに定義する
  constructor(private messageService: MessageService
  ) { }


  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました');
    return of(MEMBERS);
  }
}
