import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic, TopicType } from '../models/entities';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://www.rstcode.somee.com/api/topic/';
  constructor(private http: HttpClient) {  }
  getTopicTypes() {
    return this.http.get(this.baseUrl + 'GetAllTopicTypes');
  }
  getTopicByTypeId(topicTypeID: string) {
    return this.http.get(this.baseUrl + 'GetTopicsByTypeId/' + topicTypeID);
  }
  getTopicByType(topicTypeName: string) {
   const topicType: TopicType = new TopicType();
   topicType.Type = topicTypeName;
   return this.http.post(this.baseUrl + 'GetTopicsByType', topicType);
  }
  addTopicType(topicType: TopicType) {
    return this.http.post(this.baseUrl + 'InsertTopicType', topicType);
  }
  addTopic(topic: Topic) {
    return this.http.post(this.baseUrl + 'InsertTopic', topic);
  }
  updateTopic(topic: Topic) {
    return this.http.put(this.baseUrl + 'UpdateTopicById', topic);
  }
  removeTopic(topicID: string) {
    return this.http.delete(this.baseUrl + 'DeleteTopic/' + topicID);
  }
}