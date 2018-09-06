//import dynamic from './dynamic';
export default function(){
    document.body.insertAdjacentHTML('beforeEnd', '<a href="javascript:void(0)">Get script1</a>');

    document.querySelector('a').addEventListener('click', function(){
        //dynamic();
        import('./dynamic').then(()=>{
            debugger
        })
    });
}
