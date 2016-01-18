---
layout: default
---
TODO
Shows page definitions in alphabetical order if there are definitions
            Definitions are defined as YAML in the respective pages
            
            {% if page.definition %}
                <div id="definition">
                    <h2>Definitions</h2>
                </div>
        
                <div class="panel panel-default">
                    <div class="panel-body">
                        
                        <dl class="dl-horizontal">
                    
                        {% assign sorted_def = page.definition | sort %}
                        {% for def in sorted_def %}
                            <dt>{{ def[0] | capitalize }}</dt>
                            <dd>{{ def[1] }}</dd>
                        {% endfor %}

                        </dl>
                    </div>
                </div>
            {% endif %}