---
parent: RNA
title: duplication
category: description
---

Format:   **"prefix""sequence_duplicated""dup"**,  e.g. g.123_345dup

**"prefix"**  =  reference sequence used  =  g.<br>
**"sequence_duplicated"**  =  the range of nucleotides duplicated  =  123_345<br>
**"inv"**  =  the type of change is a duplication  =  dup
 
 
**NOTE:**
<ul>
<li><b>prefix</b> reference sequences accepted are g., c. and n. (genomic, coding DNA and non-coding DNA reference sequences).</li>
<li>by definition, duplication may only be used when the additional copy is <b>directly 3'-flanking</b> of the original copy (a "tandem duplication").</li> 
<li>when there is no evidence that the extra copy of a sequence detected is in tandem (directly 3'-flanking) the original copy, the change can not be described as a duplication, it should be described as an insertion.</li> 
 <li>under discussion, see <i><a ref='http://www.hgvs.org/mutnomen/HGVS_extend_PT.doc'>Proposal for complex variants</a></i>:<br> 
{ } (curly braces) can be used to list any change in the region duplicated ("sequence_duplicated") which is different when compared to the source, e.g.  g.123_345dup<b><i>{232A>G}</i></b>.</li>
</ul>