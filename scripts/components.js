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
                        $(".bar_slctr-img").attr("src", cmpnt_st.bar_slctr[0].prg[0].icon_url);
                        $('.cmpt_program_bsct').css({
                            'color': cmpnt_st.bar_slctr[0].prg[0].color,
                            'background-color': cmpnt_st.bar_slctr[0].prg[0].bk_color
                        });
                        $(".bar_slctr_cta").attr("src", cmpnt_st.bar_slctr[0].prg[0].icon_cta);
                        break;
                    case 'stage':
                        $(".bar_slctr-img").attr("src", cmpnt_st.bar_slctr[0].stage[0].icon_url);
                        $('.cmpt_program_bsct').css({
                            'color': cmpnt_st.bar_slctr[0].stage[0].color,
                            'background-color': cmpnt_st.bar_slctr[0].stage[0].bk_color,
                            'corsor': 'pointer'
                        });
                        $(".bar_slctr_cta").attr("src", cmpnt_st.bar_slctr[0].stage[0].icon_cta);
                        break;

                        case 'section':
                        $(".bar_slctr-img").attr("src", cmpnt_st.bar_slctr[0].section[0].icon_url);
                        $('.cmpt_program_bsct').css({
                            'color': cmpnt_st.bar_slctr[0].section[0].color,
                            'background-color': cmpnt_st.bar_slctr[0].section[0].bk_color,
                            'corsor': 'pointer'
                        });
                        $(".bar_slctr_cta").attr("src", cmpnt_st.bar_slctr[0].section[0].icon_cta);
                        break;
                }
            }
        }
    }
}