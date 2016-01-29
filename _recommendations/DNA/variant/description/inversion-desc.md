---
parent: DNA
title: inversion
category: description
---

Format:   **"prefix""sequence_changed""inv"**,  e.g. g.123_345inv

**"prefix"**  =  reference sequence used  =  g.<br>
**"sequence_changed"**  =  the range of nucleotides inverted  =  123_345<br>
**"inv"**  =  the type of change is an inversion  =  inv
 
 
**NOTE:**
<ul>
<li><b>prefix</b> reference sequences accepted are g., c. and n. (genomic, coding DNA and non-coding DNA reference sequences).</li>
<li>by definition, the region inverted ("sequence_changed") contains <b><i>more then one nucleotide</i></b>. The description g.234inv is therefore not allowed; a one nucleotide inversion should be described as a substitution. 
 <li>under discussion, see <i><a ref='http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc'>Proposal for complex variants</a></i>:<br> 
{ } (curly braces) can be used to list any change in the region inverted ("sequence_changed") which is different when compared to the source, e.g.  
g.123_345inv<b><i>{232A>G}</i></b>.</li>
<li>inversions are not used on Protein level</li>
</ul>