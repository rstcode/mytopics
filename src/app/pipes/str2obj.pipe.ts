import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'str2obj'
})
export class Str2objPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    value = value.replace(/\r?\n/g, '<br />').trim();
    //return this.urlify(value);
    let txt: string = this.urlify(value).toString()
    let lbArry = txt.split("<br />");
    if (lbArry.length > 0) {
      let res = this.applyHtmlLines(lbArry);
      return res;
    }

    return txt;
  }

  applyHtmlLines(strArry: string[]) {
    let ulstated = false;

    let str: string = '';

    for (let i = 0; i < strArry.length; i++) {
      if (strArry[i].startsWith('#')) {
        str = str.concat('<font size="5">' + strArry[i].substring(1) + '</font><br />');
      }
      else if (strArry[i].startsWith('-')|| strArry[i].startsWith('>')) {
        if (!ulstated) {
          str = str.concat('<ul><li>' + strArry[i].substring(1) + '</li>');
          ulstated = true;
        }
        else if (ulstated && i == (strArry.length - 1)) {
          str = str.concat('<li>' + strArry[i].substring(1) + '</li></ul>');
          ulstated = false;
        }
        else {
          str = str.concat('<li>' + strArry[i].substring(1) + '</li>');
        }
      }
      else if (ulstated) {
        str = str.concat('</ul>' + strArry[i]);
        ulstated = false;
      }
      else {
        str += (i === 0) ? '' : '<br />';
        str = str.concat(strArry[i]);
      }
    }
    return str;
  }

  urlify(text) {
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
    //https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      const pngBool = new RegExp('.png' + "$").test(url);
      const jpgBool = new RegExp('.jpg' + "$").test(url);
      if (pngBool || jpgBool) {
        return '<img src="' + url + '" class = "media-object" />';
      }
      else
        return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
  }
}