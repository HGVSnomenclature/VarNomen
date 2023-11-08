---
layout: default
main: true
---

<div class="jumbotron">
    <div class="container">
        <h1>Sequence Variant Nomenclature</h1>
        <div class="carousel">
            <div>
                <p>
                    Please <a href='https://www.paypal.com/donate/?hosted_button_id=DHJVLF3Z2TA2U' target='\_blank'>support our efforts: <img height='20px' src='/assets/donate.gif'></img></a> <img height='150px' src='/assets/GVdonationQRcode.png'></img> <b>Problems</b> mailing us at HGVS.org?, please use <b><font color="red"> VarNomen @ HUGO-int.org</font> (remove spaces)</b>.
                </p>
            </div>
            <div>
                <p>
                    This site covers <b>HGVS nomenclature</b>, the recommendations for the description of sequence variants in DNA, RNA and protein sequences. It is used to report and exchange information of such variants  and serves as an international standard. When using the recommendations please cite: <i>Den Dunnen et al. 2016, Hum.Mutat. 37:564-569<a href='http://onlinelibrary.wiley.com/doi/10.1002/humu.22981/abstract' target='_blank'></a></i>. HGVS-nomenclature is authorised by the Human Genome Organization (HUGO), under the responsibility of the HGVS Variant Nomenclature Committee (HVNC).
                </p>
            </div>
            <div>
                {% for pg in site.pages %}
                    {% if pg.title == "Recent Additions" %}
                        <p>{{ pg.content | markdownify | truncatewords: 100 }}</p>
                    {% endif %}
                {% endfor %}
                <div>
                    <a href="{{ site.baseurl}}/recent" class="btn btn-md btn-warning pull-right">Read More</a>
                </div>
            </div>
            <div>
                <h2>ISCN 2020 update</h2>
                <p>
                The ISCN Standing committee is inviting the genetics community to send their suggestions for required changes to ISCN 2020. All suggestions should be placed on the <a href='https://iscn.karger.com' target='_blank'>ISCN Forum </a> (sign in first), alternatively send suggestions by email to (<span class="glyphicon glyphicon-envelope"></span> <u>E-mail:</u> Ros.Hastings @ genqa.org (remove spaces). <br>The ISCN Standing Committee (ISCN SC) is preparing nomenclature for <b><i>Optical Genome Mapping (OGM)</i></b> which will be sent out for consultation to the wider genetic community prior to incorporation within the next version of ISCN.<br>The deadline to submit any changes or additions to ISCN required is the 6th January 2023.
                </p>
            </div>
            <div>
                <h2>Contact Us</h2>
                <p>
                Discussions regarding HGVS nomenclature are necessary in order to further improve them. What is listed on these pages represents the current consensus of the recommendations. We invite everybody to send us question, comments or examples of cases that are not yet covered, with a suggestion of how to describe these (<span class="glyphicon glyphicon-envelope"></span> <u>E-mail:</u> VarNomen @ HUGO-int.org (remove spaces). For questions regarding the description of variants, do not forget to mention the <b>reference sequence</b> used.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <h2>Current Recommendation</h2>
        {% include recs/recs-panel.html %}
    </div>

    <hr>
    
    <div class="row">
        <h2>Background Material</h2>
        {% include bg/bg-panel.html %}
    </div>

</div>
