function component_bar_slctr(cmpnt_type) {
    console.log(cmpnt_type)
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'components.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let cmpnt = JSON.parse(this.responseText);
            for (let cmpnt_st of cmpnt) {
                console.log(cmpnt)
                switch (cmpnt_type) {
                    case 'program':
                        $('.cmpt_program_bsct').css({
                            'background-color': cmpnt
                        });
                        break;
                }

            }
        }
    }
}
