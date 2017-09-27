---
parent: Protein
title: extension
category: description
---

Format (**<font color="red">N-terminal</font>**):  **"prefix""Met1""ext""position_new_initiation_site"**,  e.g. p.Met1ext-5

**"prefix"**  =  reference sequence used  =  p.<br>
**"Met1"**  =  normal translation initiation site  =  Met1<br>
**"ext"**  =  type of change is an extension =  ext<br>
**"position_new_initiation_site"**  =  position new upstream translation initiation site =  -5

Format (**<font color="red">C-terminal</font>**):  **"prefix""Ter_position""new_amino_acid""ext""position_new_termination_site"**,  e.g. p.Ter110Glnext\*17

**"prefix"**  =  reference sequence used  =  p.<br>
**"Ter_position"**  =  normal translation termination site  =  Ter110<br>
**"new_amino_acid"**  =  amino acid encoded by variant termination codon  =  Gln<br>
**"ext"**  =  type of change is an extension =  ext<br>
**"position_new_termination_site"**  =  position new downstream translation initiation site =  \*17

---

### Note

*	**prefix** reference sequence accepted is "p." (protein).
*	predicted consequences, i.e. without experimental evidence (no RNA or protein sequence analysed), should be given in parentheses, e.g. p.(Ter110Glnext\*17).
*	**prefix** reference sequences accepted are p. (protein).
*   **extension** variants have been accepted on **<font color="red">2012-08-31</font>**  
*	variants affecting the translation initiation site (Met1) activating a downstream (C-terminal) translation initiation site are described as a [_deletion_](/recommendations/protein/variant/deletion/), e.g. p.Gly2\_Met46del.
*	only variants that **directly affect** the normal translation termination codon are described as protein extensions (C-terminal). Variants affecting upstream (N-terminal) sequences extending the sequence beyond the normal translation termination codon are described as [_frame shifts_](/recommendations/protein/variant/frameshift/).
