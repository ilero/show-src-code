/**
 *  公共函数等
 *  add by lero
 *  2018.9.4
 *
 */



import { json2html } from "./json2html"


let list = [];


export const str2json = function (str) {
    let json = {};
    try {
        json = JSON.parse(str)
    } catch (e) {
        json = {};
        console.error('json 格式错误')
    }
    return json;
};
export const json2str = function (json) {
    let str = {};
    try {
        str = JSON.stringify(json)
    } catch (e) {
        str = {};
        console.error('json 格式错误')
    }
    return str;
};


/**
 * 插件文档地址： http://www.html580.com/9527/demo
 *
 * */

const _formatJson = (json) =>{
    if (typeof json !== 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    list = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').split('\n');
    let array = [];
    list.map((item)=>{
        let obj = {};
        obj.value = item.replace(/\s/g, "&nbsp;");
        array.push(obj);
        return item;
    });
    return array;
};
const _initJsonConfig = (array) =>{
    return {
        '<>':'code', 'class': "pt-code-line", 'html': function(obj){
            return obj.value;
        }
    }
};

export function j2h(json){
    if(typeof json === "string"){
      json = str2json(json)
    }
    let list = _formatJson(json);
    let config = _initJsonConfig(list);
    return json2html.transform(list, config);
}

