---
parent: DNA
title: insertion
category: description
---

Format:   **"prefix""position""ins""inserted_sequence"**,  e.g. g.123_124insAGC

**"prefix"**  =  reference sequence used  =  g.<br>
**"position"**  =  position two nucleotides flanking the insertion site   =  123_124<br>
**"ins"** =  the type of change is an insertion =  ins<br> 
**"inserted_sequence"**  =   the inserted sequence  =  AGC
 
 
 **NOTE:**
<ul>
<li><b>prefix</b> reference sequences accepted are g., c. and n. (genomic, coding DNA and non-coding DNA reference sequences).</li>
<li>the "position" description should contain <b><i>two flanking nucleotides</i></b>, e.g. 123 and 124 but not 123 and 125.</li>
<li>insertion can not be described using one nucleotide position, like g.123insG</li>
<li>when the inserted sequence is very long ....</li>
<ul><li>under discussion, see <i><a ref='http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc'>Proposal for complex variants</a></i>:<br>
{ } (curly braces) can be used to list any change in the inserted sequence ("new_sequence") which is different when compared to the source, e.g. .....<b><i>{999A>G}.</i></b> </li>
</ul>
</ul>