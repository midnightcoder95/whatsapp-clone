(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{59:function(e,a,t){e.exports=t(85)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),l=t.n(r),o=(t(64),t(10)),s=(t(65),t(66),t(102)),i=t(97),m=t(48),u=t.n(m),d=t(49),p=t.n(d),h=t(50),E=t.n(h),f=t(98),v=(t(67),t(26)),b=t.n(v),g=b.a.initializeApp({apiKey:"AIzaSyAU7WTVOJbfshxKw5WUG-_L52xCCZkRzxA",authDomain:"whatsapp-607aa.firebaseapp.com",databaseURL:"https://whatsapp-607aa.firebaseio.com",projectId:"whatsapp-607aa",storageBucket:"whatsapp-607aa.appspot.com",messagingSenderId:"535901199165",appId:"1:535901199165:web:1dc2b9f3fa9352637ec354",measurementId:"G-VTXLDXV16F"}).firestore(),_=b.a.auth(),j=new b.a.auth.GoogleAuthProvider,O=g,N=t(28);var w=function(e){var a,t=e.id,r=e.name,l=e.addNewChat,i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),E=h[0],f=h[1];return Object(n.useEffect)((function(){t&&O.collection("rooms").doc(t).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[t]),Object(n.useEffect)((function(){d(Math.floor(5e3*Math.random()))}),[]),l?c.a.createElement("div",{onClick:function(){var e=prompt("Please Enter name for chat room");e&&O.collection("rooms").add({name:e})},className:"sidebarChat"},c.a.createElement("h2",null,"Add new chat ")):c.a.createElement(N.b,{to:"/rooms/".concat(t)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null,r),c.a.createElement("p",null,null===(a=E[0])||void 0===a?void 0:a.message))))},S=Object(n.createContext)(),y=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(S.Provider,{value:Object(n.useReducer)(a,t)},r)},C=function(){return Object(n.useContext)(S)};var k=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=C(),m=Object(o.a)(l,2),d=m[0].user;return m[1],Object(n.useEffect)((function(){var e=O.collection("rooms").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===d||void 0===d?void 0:d.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(i.a,null,c.a.createElement(u.a,null)),c.a.createElement(i.a,null,c.a.createElement(p.a,null)),c.a.createElement(i.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(f.a,null),c.a.createElement("input",{placeholder:"Search or start new chat",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(w,{addNewChat:!0}),t.map((function(e){return c.a.createElement(w,{key:e.id,id:e.id,name:e.data.name})}))))},I=(t(83),t(99)),x=t(100),A=t(51),W=t.n(A),D=t(52),R=t.n(D),T=t(5);var U=function(){var e,a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],m=r[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],h=d[1],E=Object(T.f)().roomId,v=Object(n.useState)(""),g=Object(o.a)(v,2),_=g[0],j=g[1],N=Object(n.useState)([]),w=Object(o.a)(N,2),S=w[0],y=w[1],k=C(),A=Object(o.a)(k,2),D=A[0].user;return A[1],Object(n.useEffect)((function(){E&&(O.collection("rooms").doc(E).onSnapshot((function(e){return j(e.data().name)})),O.collection("rooms").doc(E).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return y(e.docs.map((function(e){return e.data()})))})))}),[E]),Object(n.useEffect)((function(){h(Math.floor(5e3*Math.random()))}),[]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(p,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,_),c.a.createElement("p",null,"sast seen"," ",new Date(null===(e=S[S.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(i.a,null,c.a.createElement(f.a,null)),c.a.createElement(i.a,null,c.a.createElement(I.a,null)),c.a.createElement(i.a,null,c.a.createElement(x.a,null)))),c.a.createElement("div",{className:"chat__body"},S.map((function(e){var a;return c.a.createElement("p",{className:"chat__message ".concat(e.name==D.displayName&&"chat__receiver")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(W.a,null),c.a.createElement("form",null,c.a.createElement("input",{value:l,onChange:function(e){return m(e.target.value)},placeholder:"Type a message",type:"text"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),console.log("You typed >>>",l),O.collection("rooms").doc(E).collection("messages").add({message:l,name:D.displayName,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),m("")},type:"submit"},"Send a message")),c.a.createElement(R.a,null)))},B=t(53),M=(t(84),t(101)),G=t(41),L="SET_USER",P=function(e,a){switch(console.log(a),a.type){case L:return Object(G.a)(Object(G.a)({},e),{},{user:a.user});default:return e}};var V=function(){var e=C(),a=Object(o.a)(e,2);Object(B.a)(a[0]);var t=a[1];return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/766px-WhatsApp.svg.png",alt:""}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null,"Sign in to WhatsApp")),c.a.createElement(M.a,{onClick:function(){_.signInWithPopup(j).then((function(e){t({type:L,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In With Google")))};var z=function(){var e=C(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement("div",{className:"app__body"},c.a.createElement(N.a,null,c.a.createElement(k,null),c.a.createElement(T.c,null,c.a.createElement(T.a,{path:"/rooms/:roomId"},c.a.createElement(U,null)),c.a.createElement(T.a,{path:"/"})))):c.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,{initialState:{user:null},reducer:P},c.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.e93154cf.chunk.js.map