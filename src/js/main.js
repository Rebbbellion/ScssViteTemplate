import '../css/style.css';

const initialLoad = import.meta.glob('./initialLoad/*.js', {
   eager: true,
});

const dynamicLoad = import.meta.glob('./dynamicLoad/*.js');
//Event LIsteners and Callbacks
document.addEventListener('click', clickCallback);

function clickCallback(e) {
   if (e.target.closest('.burger')) {
      dynamicLoad['./dynamicLoad/burger.js']().then((burgerModule) => {
         burgerModule.menuToggle();
      });
   }
}
