
//to accordion dropdown list in notification box
$(document).ready(function(){
    $('.notification').click(function(){
        $('.msg-box').slideToggle(300);
    })
})

//to make an action when click anchor on the side navbar
const allSideMenu =document.querySelectorAll('.side-menu.top li a');

allSideMenu.forEach(item=>{
    const li = item.parentElement;

    item.addEventListener('click', function(){
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});
//toggle sidebar
const menuBar =document.querySelector('nav .fa-bars');
const sideBar = document.getElementById('sidebar');

menuBar.addEventListener('click',function(){
    sideBar.classList.toggle('hide');
});

//mediaqueries to navs

// if(window.innerWidth < 768){
//     sideBar.classList.add('hide')}
    
const searchBtn = document.querySelector('nav .form-input button');
const searchBtnIcon = document.querySelector('nav .form-input button .bx');
const searchForm = document.querySelector('nav form');

searchBtn.addEventListener('click',function(e){
    if(window.innerWidth < 576){
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchBtnIcon.classList.replace('fa-magnifying-glass','fa-xmark');
        }else{
            searchBtnIcon.classList.replace('fa-xmark','fa-magnifying-glass');
        }
    }
})

if(window.innerWidth < 768){
    sideBar.classList.add('hide');
};

if(window.innerWidth > 576){
    searchBtnIcon.classList.replace('fa-xmark','fa-magnifying-glass');
    searchForm.classList.remove('show');
};

window.addEventListener('resize',function(){
    if(this.innerWidth > 576){
        searchBtnIcon.classList.replace('fa-xmark','fa-magnifying-glass');
    searchForm.classList.remove('show');
    }
})

//charts
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Products', 'Sales', 'Cost'],
      datasets: [{
        label: 'sources',
        data: [1200, 1900,2890],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
    }
  });

const earning = document.getElementById('earning');

  new Chart(earning, {
    type: 'bar',
    data: { 
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'earning',
        data: [1200, 2333, 3000, 5000, 3456, 6780,1900, 2903, 3000, 5000, 2311, 6700],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.9)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(201, 203, 207, 0.6)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(201, 203, 207, 0.6)'
          ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
    }
  });  