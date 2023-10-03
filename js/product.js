let ratingStarInput =[...document.querySelectorAll('.rating-star')];
ratingStarInput.map((star,index)=>{
    star.addEventListener('click',()=>{
        for(let i=0;i<5;i++){
            if(i<=index){
                ratingStarInput[i].src=`<i class="fa-solid fa-star" style="color: #e4cb72;" class="star"></i>`
            }
            else{
                ratingStarInput[i].src=`<i class="fa-regular fa-star" style="color: #e4cb72;" class="star"></i>`
            }
        }
    })
})

/*this is not working*/ 