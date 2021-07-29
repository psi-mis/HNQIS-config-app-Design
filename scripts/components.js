function component_bar_slctr(cmpnt_type) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'components.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let cmpnt = JSON.parse(this.responseText);
            for (let cmpnt_st of cmpnt) {
                switch (cmpnt_type) {
                    case 'program':
                        console.log('case');
                        $('.cmpt_program_bsct').css({
                            'color': cmpnt_st.bar_slctr[0].prg[0].color,
                            'background-color': cmpnt_st.bar_slctr[0].prg[0].bk_color
                        });
                        break;
                }

            }
        }
    }
}
