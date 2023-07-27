const total = document.querySelector('#checkerAll');
const isChecked = total.checked;
const checkbox = document.querySelectorAll('.checkbox-img');

total.addEventListener('click',function(){
  if(isChecked){
    const checkboxes = document.querySelectorAll('.checkbox-img');
    for(const checkbox of checkboxes){
    checkbox.checked = true;
    }
  }else{
    const checkboxes = document.querySelectorAll('.checkbox-img');
    for(const checkbox of checkboxes){
      checkbox.checked = false;
    }
  }
})

const checkboxes = document.querySelectorAll('.checkbox-img');
for(const checkbox of checkboxes){
    checkbox.addEventListener('click',function(){
        const totalCnt = checkboxes.length;
        const checkedCnt = document.querySelectorAll('.checkbox-img:checked').length;
        if(totalCnt == checkedCnt){
            document.querySelector('#checkAll').checked = true;
        }
        else{
            document.querySelector('#checkAll').checked = false;
        }  
    })
}