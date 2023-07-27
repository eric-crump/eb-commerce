import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from "contentstack";
Contentstack.Utils.addEditableTags();

const Stack = Contentstack.Stack({
  "api_key": "blt905fb6c291b53bb7",
  "delivery_token": "cs8060e83b87fe84e6813405c9",
  "environment": "preview",
  live_preview: {
    management_token: 'cs761759b8776a75c50aec11ae',
    enable: true,
    host: 'api.contentstack.io',
  }
});
  
  ContentstackLivePreview.init({
    stackSdk: Stack,
    clientUrlParams: {
        protocol: "https",
        host: "app.contentstack.com",
        port: 443,
    },
  });
  
  export default {
    getElement(id, type) { 
      return new Promise((resolve, reject) => {
        const Query = Stack.ContentType(type)
          .Entry(id)
          .toJSON()
          .fetch()
          .then(
            function success(entry) {
              //console.log('entry', entry);
              Contentstack.Utils.addEditableTags(entry, type, true);
              resolve(entry);
            },
            function error(err) {
              console.log('error id', id);
              reject(err);
            }
          );
      });
    },
    
    getElementByUrl(type, url){
      return new Promise((resolve, reject) => {
          const Query = Stack.ContentType(type)
              .Query()
              .where('url', {'$eq': url})
              .toJSON()
              .find()
              .then(
                  function success(data) {
                    const entry = data[0][0];
                    //console.log('entry', entry);
                    Contentstack.Utils.addEditableTags(entry, type, true);
                    resolve(entry);
                  },
                  function error(err) {
                    reject(err);
                  }
              );
      })
  },
  
    getElementWithRefs(id, type, references) {
      return new Promise((resolve, reject) => {
        const Query = Stack.ContentType(type)
          .Entry(id)
          .includeReference(...references)
          .toJSON()
          .fetch()
          .then(
            function success(entry) {
              //console.log('entry', entry);
              Contentstack.Utils.addEditableTags(entry, type, true);
              resolve(entry);
            },
            function error(err) {
              console.log('error id', id);
              reject(err);
            }
          );
      });
    },
    // get nav call
    getStack(){
      return Stack;
    }
  };
  
  export const onEntryChange = ContentstackLivePreview.onEntryChange;