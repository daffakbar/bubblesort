// Function Descending
function bubble_sortDESC(bs) {
    let n = bs.length
    var sort ;
    do {
        sort = false;
        for (let i=0; i < n -1; i++) {
            if (bs[i] < bs[i+1]) {
                var temp = bs[i];
                bs[i] = bs[i+1];
                bs[i+1] = temp;
                sort = true;
            }
        }
    } while (sort);
}        

// function Ascending
function bubble_sortASC(bs) {
    let n = bs.length
    var sort ;
    do {
        sort = false;
        for (let i=0; i < n -1; i++) {
            
            if (bs[i] > bs[i+1]) {
                var temp = bs[i];
                bs[i] = bs[i+1];
                bs[i+1] = temp;
                sort = true;
            }
        }
    } while (sort);
}        
    
module.exports = {
    bubble_sortASC,
    bubble_sortDESC
}  