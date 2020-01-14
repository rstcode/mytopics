import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'str2obj'
})
export class Str2objPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    value = value.replace(/\r?\n/g, '<br />').trim();
    return this.urlify(value);
    let txt: string = this.urlify(value).toString()
    let lbArry = txt.split("<br />");
    if (lbArry.length > 3 && args.ShowContent == false) {
      lbArry = lbArry.slice(0, 2);
      let res=lbArry.join("<br />")+"<a href=\"javascript:void(0);\" (click)=\"args.ShowContent='true'\">..more</a>";
      return res;
    }
    return txt;
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