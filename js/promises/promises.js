const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 is resolved');
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 is resolved');
    }, 0);
});

const promise3 = Promise.resolve('Promise 3 is resolved');

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 4 is resolved');
    }, 1000);
});

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 5 is rejected')
    }, 1000)
})

Promise
    .all([promise1, promise2, promise3, promise4])
    .then((data) => {
        console.log('Promise.all')
        console.log(data)
    })

Promise
    .any([promise1, promise2, promise3, promise4])
    .then((data) => {
        console.log('Promise.any')
        console.log(data)
    })

Promise
    .race([promise1, promise2, promise3, promise4])
    .then((data) => {
        console.log('Promise.race')
        console.log(data)
    })

Promise
    .allSettled([promise1, promise2, promise3, promise4])
    .then((data) => {
        console.log('Promise.allSettled')
        console.log(data)
    })

Promise
    .all([promise1, promise2, promise3, promise4, rejectedPromise])
    .then((data) => {
        console.log('Promise.all with reject')
        console.log(data)
    })
    .catch((err) => console.error(err))

Promise
    .any([promise1, promise2, promise3, promise4, rejectedPromise])
    .then((data) => {
        console.log('Promise.any with reject')
        console.log(data)
    })
    .catch((err) => console.error(err))

Promise
    .race([promise1, promise2, promise3, promise4, rejectedPromise])
then((data) => {
    console.log('Promise.race with reject')
    console.log(data)
})
    .catch((err) => console.error(err))

Promise
    .allSettled([promise1, promise2, promise3, promise4, rejectedPromise])
    .then((data) => {
        console.log('Promise.allSettled with reject')
        console.log(data)
    })
    .catch((err) => console.error(err))
