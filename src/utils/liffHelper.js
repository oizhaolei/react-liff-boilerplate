const liff = window.liff;
let isInit = false;
let profile = {};

class liffHelper {
  init() {
    return new Promise((resolve, reject) => {
      if (!isInit) {
        liff.init(
          {
            liffId: process.env.MY_LIFF_ID,
          })
          .then(() => {
            isInit = true;
            resolve();
          })
          .catch((err) => {
            alert(err);
            reject();
          });
      } else {
        resolve();
      }
    });
  }

  getLIFFInfo() {
    return liff;
  }

  getProfile() {
    return new Promise((resolve, reject) => {
      this.init()
        .then(() => {
          if (isInit && !profile.userId) {
            liff.getProfile()
              .then(pf => {
                profile = pf;
                resolve(profile);
              })
              .catch((err) => {
                alert('get profile error', err);
                reject(err);
              });
          } else {
            resolve(profile)
          }
        })
        .catch(err => { reject(err) });
    });
  }

  closeWindow() {
    liff.closeWindow();
  }

  openWindow(url, external) {
    liff.openWindow({ url, external });
  }

  sendMessages(messages) {
    const messagesToSend = Array.isArray(messages) ? messages : [messages];
    return new Promise((resolve, reject) => {
      this.init()
        .then(() => {
          liff.sendMessages(messagesToSend)
            .then(() => {
              resolve();
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
export default new liffHelper();
