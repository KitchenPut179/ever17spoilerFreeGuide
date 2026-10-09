document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('HintWords');
    const listItems = document.querySelectorAll('li');

    //save the orginaal text
    const originalTexts = Array.from(listItems).map(li => li.innerHTML);

    //initally hide it
    //li.innerHTML = originalTexts[index].replace(/\(.*?\)/g, '').trim();

    checkbox.addEventListener('change', function() {
        if (listItems.length <= 0){
            alert("Couldn't find list items!");
        }
        listItems.forEach((li, index) => {

            //hide and restore the hint text
            if (this.checked) 
                {li.innerHTML = originalTexts[index].replace(/\(.*?\)/g, '').trim();}
                else 
                {li.innerHTML = originalTexts[index];}
        });
    });
});