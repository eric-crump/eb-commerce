import ContentstackLivePreview from "@contentstack/live-preview-utils";
import Contentstack from "contentstack";
Contentstack.Utils.addEditableTags();

const Stack = Contentstack.Stack({
  "api_key": "bltf403f38796221dc1",
  "delivery_token": "cs06cd6a4bfce47cec66d424ec",
  "environment": "preview",
  live_preview: {
    management_token: 'cscd93d2d65b4589d50e4ca6a3',
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