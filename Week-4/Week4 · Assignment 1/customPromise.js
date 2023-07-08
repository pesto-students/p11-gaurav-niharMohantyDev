class CustomPromise {
    constructor(executor) {
      this.state = "pending";
      this.value = undefined;
      this.handlers = [];
  
      try {
        executor(this.resolve.bind(this), this.reject.bind(this));
      } catch (error) {
        this.reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      return new CustomPromise((resolve, reject) => {
        const handler = {
          onFulfilled: typeof onFulfilled === "function" ? onFulfilled : null,
          onRejected: typeof onRejected === "function" ? onRejected : null,
          resolve,
          reject,
        };
  
        if (this.state === "pending") {
          this.handlers.push(handler);
        } else {
          this.handle(handler);
        }
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    resolve(value) {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.handlers.forEach((handler) => this.handle(handler));
      }
    }
  
    reject(reason) {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.handlers.forEach((handler) => this.handle(handler));
      }
    }
  
    handle(handler) {
      if (this.state === "fulfilled") {
        if (handler.onFulfilled) {
          try {
            const result = handler.onFulfilled(this.value);
            handler.resolve(result);
          } catch (error) {
            handler.reject(error);
          }
        } else {
          handler.resolve(this.value);
        }
      } else if (this.state === "rejected") {
        if (handler.onRejected) {
          try {
            const result = handler.onRejected(this.value);
            handler.resolve(result);
          } catch (error) {
            handler.reject(error);
          }
        } else {
          handler.reject(this.value);
        }
      }
    }
  
    static resolve(value) {
      return new CustomPromise((resolve) => {
        resolve(value);
      });
    }
  
    static reject(reason) {
      return new CustomPromise((resolve, reject) => {
        reject(reason);
      });
    }
  }
  
 
  
  const myPromise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });
  
  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });