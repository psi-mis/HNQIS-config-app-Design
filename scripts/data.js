const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'data.json', true);
xhttp.send();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        for (let item of datos) {
            //console.log(item.name);
            let stages = item.programStages;
            cnt_stages = stages.length;

            $('.list-section').append(`
                <div class="cmpt_program_bsct">
                    <div class="program_bsct-icon">
                        <img class="bar_slctr-img" alt="prg" />
                    </div>
                    <div class="program_bsct-title">
                        ${item.displayName} <span>(${cnt_stages}) Program stages</span>
                    </div>
                    <div class="program_bsct-warning_error slctr_hidden">
                        <img src="/images/i-warning.svg" alt="wrng" />
                        <img src="images/i-error.svg" alt="err" />
                        <div class="program_bsct-cw">
                            3
                        </div>
                        <div class="program_bsct-ce">
                            2
                        </div>
                        <div class="program_bsct-cont_w slctr_hidden">
                            <div class="program_bsct-warnings">
                                No form name set - the Long Name will be used
                            </div>
                            <div class="program_bsct-warnings">
                                Feedback active, but not feedback text
                            </div>
                            <div class="program_bsct-warnings">
                                Another low-importance violation...
                            </div>
                        </div>
                        <div class="program_bsct-cont_e slctr_hidden">
                            <div class="program_bsct-errors">
                                Numerator set, but not Order set
                            </div>
                            <div class="program_bsct-errors">
                                Denominator not set (numerator is set)
                            </div>
                        </div>
                    </div>
                    <div class="program_bsct-cta">
                        <img src="images/i-more_vert.svg" alt="wrng" />
                        <img src="images/i-expand.svg" alt="exp" />
                        <div class="menu_program slctr_hidden">
                            <div class="menu_program-edit">
                                <div class="i-edit">
                                    <img src="images/i-edit.svg" alt="edit" />
                                </div>
                                <div class="i-text">
                                    Edit program
                                </div>
                            </div>
                            <div class="menu_program-sharing">
                                <div class="i-sharing">
                                    <img src="images/i-share.svg" alt="share" />
                                </div>
                                <div class="i-text">
                                    Sharing
                                </div>
                            </div>
                            <div class="menu_program-delete">
                                <div class="i-delete">
                                    <img src="images/i-delete.svg" alt="del" />
                                </div>
                                <div class="i-text">
                                    Delete program
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }
    }
}