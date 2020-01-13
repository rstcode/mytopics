import { Injectable } from '@angular/core';
import { Topic, TopicType } from '../models/entities';
import { HttpService } from './api.service';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  constructor(private httpSerive: HttpService) {
  }
  topics = [];
  topicTypes = [];
  replceLinkToStr(str: string): string {
    return str;
  }
  CheckTopicType(topicType: string): boolean {
  console.log('topicType', topicType);
  console.log(this.topicTypes.some(p => p.Type === topicType));
  return false;
  }
  GetTopicsByType(topicType: string) {
  if (this.topicTypes != null && this.topics.length > 0) {
    const topicTypeID: string = this.topicTypes.filter(p => p.Type === topicType)[0].Id;
    return this.httpSerive.getTopicByTypeId( topicTypeID );
   }
  return this.httpSerive.getTopicByType(topicType);
  }
  AddTopic(topic: Topic, topicType: string) {
    topic.TopicType = this.topicTypes.filter(p => p.Type === topicType)[0];
    return this.httpSerive.addTopic(topic);
  }
  AddTopicTypeApiCall(topicType: TopicType) {
    return this.httpSerive.addTopicType(topicType);
  }
  AddTopicTypeToService(topicType: TopicType) {
      this.topicTypes.push(topicType);
  }
  UpdateTopicApiCall(topic: Topic) {
    return this.httpSerive.updateTopic(topic);
  }
  DeleteTopicApiCall(topic: Topic) {
    return this.httpSerive.removeTopic(topic.$key);
  }
  getTopicTypes() {
    return this.httpSerive.getTopicTypes();
  }
  loadTopicTypes(topicTypes: TopicType[]) {
    this.topicTypes = topicTypes;
  }
  checkTopicTypes() {
    return (this.topicTypes === undefined || this.topicTypes === null || this.topicTypes.length === 0);
  }
}