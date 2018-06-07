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

* **prefix** reference sequence accepted is "p." (protein).
* **extension** variants have been accepted on **<font color="red">2012-08-31</font>**.
* predicted consequences, i.e. without experimental evidence (no RNA or protein sequence analysed), should be given in parentheses, e.g. p.(Ter110Glnext\*17).
  : _**NOTE:**_ "\*17" in p.Ter110Glnext\*17 is a **position** not an amnio acid so "Ter17" can not be used.
* variants affecting the translation initiation site (Met1) activating an upstream (N-terminal) translation initiation site are described as [_deletion-insertion_](/recommendations/protein/variant/delins/), those activating a downstream (C-terminal)  initiation site as a [_deletion_](/recommendations/protein/variant/deletion/).
* **prioritisation**: (1) extension, (2) frame shift or deletion-insertion.
