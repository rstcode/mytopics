import { Injectable } from '@angular/core';
import { Topic, TopicType, User } from '../models/entities';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
@Injectable({ providedIn: 'root' })
export class FireBaseService {
    topicsRef: AngularFireList<any>;
    topicRef: AngularFireObject<any>;
    topictypesRef: AngularFireList<any>;
    topictypeRef: AngularFireObject<any>;
    topicTypes: TopicType[] = [];
    constructor(private db: AngularFireDatabase, private datepipe: DatePipe) {
        this.topictypesRef = this.db.list('posttypes');
        this.topicsRef = this.db.list('posts');
    }
    /* topictypes firebase serivce call */
    addTopicType(topicType: TopicType, uid: number) {
        topicType.ModifiedDate = this.getCurrentDate();
        this.topictypesRef = this.db.list(uid.toString() + '/types/');
        topicType.postsCount = 0;
        return this.topictypesRef.push(topicType);
    }

    insertTypekeyInPosts(uid: number, typeKey, type: string) {
        let posts = this.db.list(uid.toString() + '/posts');
        return posts.set(typeKey, { type: type });
    }


    saveOffLinetypes(topicType: TopicType) {
        this.topicTypes.push(topicType);
    }

    loadOffLinetypes(topicTypesList: TopicType[]) {
        this.topicTypes = topicTypesList;
    }

    getOffLinetype(type: string) {
        if (this.topicTypes != null && this.topicTypes.length > 0) {
            let offLinetopicTypes = this.topicTypes.filter(p => p.Type == type);
            return (offLinetopicTypes != null && offLinetopicTypes.length > 0) ? offLinetopicTypes[0].$key : '';
        }
        return '';
    }

    getTopicTypes(uid: number) {
        let types = this.db.list(uid.toString() + '/types/');
        return types.snapshotChanges();
    }

    updateTopicType(topicType: TopicType, uid: number) {
        this.topictypeRef = this.db.object(uid.toString() + '/types/' + topicType.$key);
        return this.topictypeRef.update({
            Type: topicType.Type,
            ModifiedDate: this.getCurrentDate()
        });
    }
    deleteTopicType(topicTypekey: string, uid: number) {
        this.topictypeRef = this.db.object(uid.toString() + '/types/' + topicTypekey);
        //this.topictypeRef = this.db.object('posttypes/' + key);
        return this.topictypeRef.remove();
    }

    /* topics firebase serivce call */
    getTopicsByType(typekey: string, uid: number) {
        this.topicsRef = this.db.list(uid.toString() + '/posts/' + typekey + '/');
        return this.topicsRef.snapshotChanges();
    }

    addTopic(topic: Topic, typekey: string, userName: string, uid: number) {
        topic.ModifiedDate = this.getCurrentDate();
        topic.CreatedBy = userName;
        topic.ModifiedBy = userName;
        this.changePostCount(typekey, uid, 1);
        this.topicsRef = this.db.list(uid.toString() + '/posts/' + typekey);
        return this.topicsRef.push(topic);
    }
    changePostCount(typeKey: string, uid: number, cnt: number) {
        this.db.object(uid.toString() + '/types/' + typeKey + '/postsCount').query
            .ref.transaction(postsCount => {
                if (postsCount === null) {
                    return postsCount = 0;
                } else {
                    return postsCount + (cnt);
                }
            })
    }

    updateTopic(topic: Topic, typekey: string, userName: string, uid: number) {
        //this.topicRef = this.db.object('posts/' + topic.$key);
        this.topicRef = this.db.object(uid.toString() + '/posts/' + typekey + '/' + topic.$key);
        return this.topicRef.update({
            Header: topic.Header,
            Description: topic.Description,
            ModifiedBy: userName,
            ModifiedDate: this.getCurrentDate()
        });
    }

    deleteTopic(topickey: string, typekey: string, uid: number) {
        //this.topicRef = this.db.object('posts/' + key);
        this.changePostCount(typekey, uid, -1);
        this.topicRef = this.db.object(uid.toString() + '/posts/' + typekey + '/' + topickey);
        return this.topicRef.remove();
    }
    /*Common Functions  */
    getCurrentDate() {
        const date = new Date();
        return this.datepipe.transform(date, 'dd/MM/yyyy');
    }
}