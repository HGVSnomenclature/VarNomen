---
parent: Protein
title: deletion/ insertion (indel)
category: description
---

Deletion/insertions (indels) replace one or more amino acid residues with one or more other amino acid residues. Deletion/insertions are described using "**_delins_**" as a deletion followed by an insertion after an indication of the amino acid(s)deleted separated by a _**"_"**_ (_underscore_, _[see Discussion](disc.html#indel)_). _**Frame shifts**_ are a _**special type of amino acid deletion/insertion**_ affecting an amino acid _**between**_ the first (_initiation, ATG_) and last codon (_termination, stop_), replacing the normal C-terminal sequence with one encoded by **_another reading frame_** (specified _**<small><font color="#FF0000">2013-10-11</font></small>**_). A frame shift is described using "_**fs**_" after the first amino acid affected by the change. Descriptions either use a _**short** ("fs") or **long** ("fsTer#") **description**_. The description of frame shifts does not include the deletion at protein level from the site of the frame shift to the natural end of the protein (stop codon). The inserted amino acid residues are not described, only the total length of the new shifted frame is given (i.e. including the first amino acid changed).  
_**NOTE:** [typing error in den "Dunnen & Antonarakis (2000)"](disc.html#frameshift)_. The suggestion to use _**">"**_ to indicate **_"delins"_** in frame shift descriptions has been retracted.
_**NOTE:**_ when _**one**_ nucleotide is replaced by _**one**_ other nucleotide the change is called a [**_substitution_**](#sub)

*   **in-frame**
    *   p.(Cys28_Lys29delinsTrp) indicates RNA nor protein was analysed but the predicted change is a 3 bp deletion that affects the codons for Cysteine-28 and Lysine-29, substituting them for a codon for Tryptophan
    *   p.Cys28delinsTrpVal denotes a 3 bp insertion in the codon for Cysteine-28, generating codons for Tryptophan (Trp, W) and Valine (Val, V)
    *   p.(Pro578_Lys579delinsLeuTer) is a deletion-insertion variant resulting from the change c.1733_1735delinsTTT. The predicted consequence of variant c.1732_1794del is p.(Pro578_Gln598del). <span style="font-style: italic;">Note that although the proteins resulting from these changes are identical, their HGVS description is different.</span>  
        <span style="font-weight: bold; font-style: italic;">NOTE:</span> these example derive from the SLC34A3 gene (NM_080877.2)

*   **frame shifts** are described using the format _p.Arg97Glyfs*26_ (alternatively _p.Arg97GlyfsTer26_, or short _p.Arg97fs_) where _Arg97Gly_ describes the change of the first amino acid affected (Arg97 replaced by a Pro residue), **_"fs"_** indicating the _**frame shift**_ and _*16_ giving the position of the translation termination codon (stop codon) in the new reading frame.  
    _**NOTE:**_  the description does not include a description of the deletion from the site of the change to the C-terminal end of the protein (stop codon) like _p.Arg97_Leu833delinsGlyfsTer26)_ nor a specific description of the inserted amino acid residues.  
    _**NOTE:**_ the shifted reading frame includes the first new amino acid (_Gly_) and encounters a translation termination codon at position 26 (_Ter26_ or _*26_). The shifted reading frame is thus open for 'Ter26-1' amino acids.

    *   <u>short description</u>  -  uses "fs" only, e.g. *p.Arg97fs*
    *   <u>long description</u>  -  uses "fsTer#" (alternatively "fs\*#") ([_see Discussion_](disc.html#frameshift))
        *   includes the change occurring at the site of the frame shift, e.g. _p.Arg97Gly_
        *   "fsTer#" (or "fs\*#") indicates at which position the new reading frame encounters a translation termination (stop) codon stop (Ter# / \*#). The position of the stop in the new reading frame is calculated starting from the first amino acid changed by the frame shift, and ending at the first stop codon (fsTer# or fs\*#)
    *   <u>Examples</u>
        *   _p.Arg97ProfsTer23 (alternatively p.Arg97Profs*23; **short** p.Arg97fs)_ denotes a frame shifting change with Arginine-97 as the first affected amino acid, replacing it for a Proline and creating a new reading frame ending at a stop at position 23 (counting starts with the Proline as amino acid 1)
        *   _p.Glu5Valfs*5_ describes a frame shifting insertion (do not use _p.Glu5Valins2fs*3_)
        *   _p.(Tyr4*)_ indicates RNA nor protein was analysed but the predicted consequence of the change c.12delC in the sequence ATG-GAT-GCA-TA_**C**_-GTG-ACG to ATG-GAT-GCA-<u>TA.-G</u> <u>TG-A</u> CG is a Tyr to translation termination codon.
        *   _p.Asp2Metfs*4 (alternatively p.Asp2fs)_ describes the consequence of the change c.4delG in the sequence ATG-**_G_**AT-GCA-TAC-GTG-ACG to ATG- <u>.AT-G</u> <u>CA-T</u> <u>AC-G</u> <u>TG-A</u> CG.
        *   _p.Glu5Valfs*5 (alternatively p.Glu5fs)_ describes the consequence of the change c.6_13dup in the sequence ATG-GA**_T-GCA-TAC-G_**AG-ATG-AGG  to ATG-GAT-GCA-TAC-<u>G<i><b>T-G <u>CA-T</u> <u>AC-G</u></b></i> <u>AG-A</u> <u>TG-A</u> GG.
        *   _**<font color="#FF0000"><small>date 2012-11-01</small></font>** p.Ile327Argfs*? (alternatively p.Ile327fs)_ describes the consequences of a frame shifting change (e.g. a 1-nucleotide insertion) with Isoleucine-327 as the first affected amino acid, replacing it for an Arginine and creating a new reading frame which does not encounter a new stop codon ([_see FAQ_](FAQ.html#nostop)).

_**NOTE:**_ the changes observed should be described on protein level and not try to incorporate any knowledge regarding the change at DNA-level (_[see Recommendation](#protonly)_). Thus, _p.His150Hisfs*10_ is not correct, but _p.Gln151Thrfs*9_ is.