
    let sales = prompt("Enter the sales value");
    let comm;
    switch(true) {
        case sales >=0 && sales <5001:
            comm = sales *0.02;
            console.log(comm);
            break;
            case sales >=5001 && sales <10001:
            comm = 5000 *0.02 + (sales - 5000) * 0.05;
            console.log(comm);
            break;
            case sales >=10001 && sales <20001:
            comm = 5000 * 0.02 + 5000 * 0.05 + (sales - 10001) * 0.07;
            console.log(comm);
            break;
            case sales >=20001 :
            comm = 5000 * 0.02 + 5000 * 0.05 + 10001 * 0.07 +(sales - 20000) * 0.1;
            console.log(comm);
            break;
    }
           
    
