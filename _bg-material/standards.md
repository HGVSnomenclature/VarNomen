---
layout: default
title: Standards
order: 3
---

# {{ page.title }}

* * * 

<a name ="DNAcode"></a>

## Nucleotides (DNA / RNA)

At DNA and RNA level HGVS nomenclature follows the _Nomenclature for Incompletely Specified Bases in Nucleic Acid Sequences_ ([see IUBMB (NC-IUB)](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html){:target="\_blank"}, specifying the description of nucleotides ([see list](http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html#500){:target="\_blank"}) and the NCBI standards for sequence files and database searches ([e.g. BLAST](http://www.ncbi.nlm.nih.gov/BLAST/blastcgihelp.shtml){:target="\_blank"}).

* * * 

### **DNA**

{:.table .table-bordered}
| Symbol |    Meaning   |           Description           |
|:------:|:------------:|:-------------------------------:|
| A      | A            | Adenine                         |
| C      | C            | Cytosine                        |
| G      | G            | Guanine                         |
| T      | T            | Thymine                         |
| B      | C, G or T    | not-A (B follows A in alphabet) |
| D      | A, G or T    | not-C (D follows C in alphabet) |
| H      | A, C or T    | not-G (H follows G in alphabet) |
| K      | G or T       | Keto                            |
| M      | A or C       | aMino                           |
| N      | A, C, G or T | aNy                             |
| R      | A or G       | puRine                          |
| S      | G or C       | Strong interaction (3 H-bonds)  |
| V      | A, C or G    | not-T / not-U ( V follows U )   |
| W      | A or T       | Weak interaction (2 H-bonds)    |
| Y      | C or T       | pYrimidine                      |
|        |              |                                 |
| X*     | A, C, G or T | masked nucleotide               |
| -*     | none         | gap of indeterminate length     |

> *used in alignment only

* * * 

### **RNA**

{:.table .table-bordered}
| Symbol |    Meaning   |           Description           |
|:------:|:------------:|:-------------------------------:|
| a      | A            | Adenosine                       |
| c      | C            | Cytidine                        |
| g      | G            | Guanosine                       |
| u      | U            | Uridine                         |
| b      | c, g or u    | not-a (b follows a in alphabet) |
| d      | a, g or u    | not-c (d follows c in alphabet) |
| h      | a, c or u    | not-g (h follows g in alphabet) |
| k      | g or u       | keto                            |
| m      | a or c       | amino                           |
| n      | a, c, g or u | any                             |
| r      | a or g       | purine                          |
| s      | g or c       | strong interaction (3 H-bonds)  |
| v      | a, c or g    | not-u ( v follows u             |
| w      | a or u       | weak interaction (2 H-bonds)    |
| y      | c or u       | pyrimidine                      |

* * * 

<a name ="RNAcode"></a>

## Genetic Code

At the protein level HGVS nomenclature follows the _Nomenclature and Symbolism for Amino Acids and Peptides_ [see IUPAC-IUB](http://www.chem.qmul.ac.uk/iupac/AminoAcid/){:target="\_blank"}, specifying the description of amino acids ([see list](http://www.chem.qmul.ac.uk/iupac/AminoAcid/AA1n2.html#AA1){:target="\_blank"}). In addition HGVS nomenclature uses "**Ter**" (three-letter amino acid code) and "**<font color="red">*</font>**" (three- and one-letter amino acid code) to indicate a translation termination (stop) codon. _**NOTE**_: in older versions the "**X** was used instead.
In the Table below, to support translation from a DNA sequence, we have used a "**T**" in the codons although in nature RNA is translated so the codons contain **U**'s.

<table class="table table-bordered text-center">
  <tr>
    <th colspan="6">Nucleotide position in codon</th>
  </tr>
  <tr>
    <td>First<br></td>
    <td colspan="4">Second</td>
    <td>Third</td>
  </tr>
  <tr>
    <td></td>
    <td><b>T</b></td>
    <td><b>C</b></td>
    <td><b>A</b></td>
    <td><b>G</b></td>
    <td></td>
  </tr>
  <tr class="active">
    <td rowspan="4"><b>T</b><br></td>
    <td>TTT - Phe</td>
    <td>TCT - Ser</td>
    <td>TAT - Tyr</td>
    <td>TGT - Cys</td>
    <td><b>T</b></td>
  </tr>
  <tr class="active">
    <td>TTC - Phe</td>
    <td>TCC - Ser</td>
    <td>TAC - Tyr</td>
    <td>TGC - Cys</td>
    <td><b>C</b></td>
  </tr>
  <tr class="active">
    <td>TTA - Leu</td>
    <td>TCA - Ser</td>
    <td>TAA - */Ter</td>
    <td>TGA - */Ter</td>
    <td><b>A</b></td>
  </tr>
  <tr class="active">
    <td>TTG - Leu</td>
    <td>TCG - Ser</td>
    <td>TAG - */Ter</td>
    <td>TGG - Trp</td>
    <td><b>G</b></td>
  </tr>
  <tr>
    <td rowspan="4"><b>C</b></td>
    <td>CTT - Leu</td>
    <td>CCT - Pro</td>
    <td>CAT - His</td>
    <td>CGT - Arg</td>
    <td><b>T</b></td>
  </tr>
  <tr>
    <td>CTC - Leu</td>
    <td>CCC - Pro</td>
    <td>CAC - His</td>
    <td>CGC - Arg</td>
    <td><b>C</b></td>
  </tr>
  <tr>
    <td>CTA - Leu</td>
    <td>CCA - Pro</td>
    <td>CAA - Gln</td>
    <td>CGA - Arg</td>
    <td><b>A</b></td>
  </tr>
  <tr>
    <td>CTG - Leu</td>
    <td>CCG - Pro</td>
    <td>CAG - Gln</td>
    <td>CGG - Arg</td>
    <td><b>G</b></td>
  </tr>
  <tr class="active">
    <td rowspan="4"><b>A</b></td>
    <td>ATT - Ile</td>
    <td>ACT - Thr</td>
    <td>AAT - Asn</td>
    <td>AGT - Ser</td>
    <td><b>T</b></td>
  </tr>
  <tr class="active">
    <td>ATC - Ile</td>
    <td>ACC - Thr</td>
    <td>AAC - Asn</td>
    <td>AGC - Ser</td>
    <td><b>C</b></td>
  </tr>
  <tr class="active">
    <td>ATA - Ile</td>
    <td>ACA - Thr</td>
    <td>AAA - Lys</td>
    <td>AGA - Arg</td>
    <td><b>A</b></td>
  </tr>
  <tr class="active">
    <td>ATG - Met</td>
    <td>ACG - Thr</td>
    <td>AAG - Lys</td>
    <td>AGG - Arg</td>
    <td><b>G</b></td>
  </tr>
  <tr>
    <td rowspan="4"><b>G</b></td>
    <td>GTT - Val</td>
    <td>GCT - Ala</td>
    <td>GAT - Asp</td>
    <td>GGT - Gly</td>
    <td><b>T</b></td>
  </tr>
  <tr>
    <td>GTC - Val</td>
    <td>GCC - Ala</td>
    <td>GAC - Asp</td>
    <td>GGC - Gly</td>
    <td><b>C</b></td>
  </tr>
  <tr>
    <td>GTA - Val</td>
    <td>GCA - Ala</td>
    <td>GAA - Glu</td>
    <td>GGA - Gly</td>
    <td><b>A</b></td>
  </tr>
  <tr>
    <td>GTG - Val</td>
    <td>GCG - Ala</td>
    <td>GAG - Glu</td>
    <td>GGG - Gly</td>
    <td><b>G</b></td>
  </tr>
</table>

* * * 

<a name ="aacode"></a>

## Amino Acid Descriptions

At the protein level HGVS nomenclature follows the _Nomenclature and Symbolism for Amino Acids and Peptides_ [see IUPAC-IUB](http://www.chem.qmul.ac.uk/iupac/AminoAcid/){:target="\_blank"}, specifying the description of amino acids ([see list](http://www.chem.qmul.ac.uk/iupac/AminoAcid/AA1n2.html#AA1){:target="\_blank"}). In addition HGVS nomenclature uses "**Ter**" (three-letter amino acid code) and "**<font color="red">*</font>**" (three- and one-letter amino acid code) to indicate a translation termination (stop) codon (_**NOTE**_: in older versions the "**X** was used instead). In the Table below, to support translation from a DNA sequence, we have used a "**T**" in the codons although in nature RNA is translated so the codons contain **U**'s. 

{:.table .table-bordered}
| One Letter Code | Three Letter Code |          Amino Acid         |             Possible Codons             |                Systemic Name                |              Formula              |
|:---------------:|:-----------------:|:---------------------------:|:---------------------------------------:|:-------------------------------------------:|:---------------------------------:|
| A               | Ala               | Alanine                     | GCA, GCC, GCG, GCT                      | 2-Aminopropanoic acid                       | CH3-CH(NH2)-COOH                  |
| B               | Asx               | Aspartic acid or Asparagine | AAC, AAT, GAC, GAT                      |                                             |                                   |
| C               | Cys               | Cysteine                    | TGC, TGT                                | 2-Amino-3-mercaptopropanoic acid            | HS-CH2-CH(NH2)-COOH               |
| D               | Asp               | Aspartic acid               | GAC, GAT                                | 2-Aminobutanedioic acid                     | HOOC-CH2-CH(NH2)-COOH             |
| E               | Glu               | Glutamic acid               | GAA, GAG                                | 2-Aminopentanedioic acid                    | HOOC-[CH2]2-CH(NH2)-COOH          |
| F               | Phe               | Phenylalanine               | TTC, TTT                                | 2-Amino-3-phenylpropanoic acid              | C6H5-CH2-CH(NH2)-COOH             |
| G               | Gly               | Glycine                     | GGA, GGC, GGG, GGT                      | Aminoethanoic acid                          | CH2(NH2)-COOH                     |
| H               | His               | Histidine                   | CAC, CAT                                | 2-Amino-3-(1H-imidazol-4-yl)-propanoic acid | ![Histidine]({{site.baseurl}}/assets/AA/histidine.gif)|
| I               | Ile               | Isoleucine                  | ATA, ATC, ATT                           | 2-Amino-3-methylpentanoic acid              | C2H5-CH(CH3)-CH(NH2)-COOH         |
| K               | Lys               | Lysine                      | AAA, AAG                                | 2,6-Diaminohexanoic acid                    | H2N-[CH2]4-CH(NH2)-COOH           |
| L               | Leu               | Leucine                     | CTA, CTC, CTG, CTT, TTA, TTG            | 2-Amino-4-methylpentanoic acid              | (CH3)2CH-CH2-CH(NH2)-COOH         |
| M               | Met               | Methionine                  | ATG (translation initiation)            | 2-Amino-4-(methylthio)butanoic acid         | CH3-S-[CH2]2-CH(NH2)-COOH         |
| N               | Asn               | Asparagine                  | AAC, AAT                                | 2-Amino-3-carbamoylpropanoic acid           | H2N-CO-CH2-CH(NH2)-COOH           |
| P               | Pro               | Proline                     | CCA, CCC, CCG, CCT                      | Pyrrolidine-2-carboxylic acid               | ![Proline]({{site.baseurl}}/assets/AA/proline.gif)|
| Q               | Gln               | Glutamine                   | CAA, CAG                                | 2-Amino-4-carbamoylbutanoic acid            | H2N-CO-[CH2]2-CH(NH2)-COOH        |
| R               | Arg               | Arginine                    | AGA, AGG, CGA, CGC, CGG, CGT            | 2-Amino-5-guanidinopentanoic acid           | H2N-C(=NH)-NH-[CH2]3-CH(NH2)-COOH |
| S               | Ser               | Serine                      | AGC, AGT, TCA, TCC, TCG, TCT            | 2-Amino-3-hydroxypropanoic acid             | HO-CH2-CH(NH2)-COOH               |
| T               | Thr               | Threonine                   | ACA, ACC, ACG, ACT                      | 2-Amino-3-hydroxybutanoic acid              | CH3-CH(OH)-CH(NH2)-COOH           |
| U               | Sec               | Selenocysteine              | TGA                                     |                                             | H2N-CH(COOH)--CH2-SeH             |
| V               | Val               | Valine                      | GTA, GTC, GTG, GTT                      | 2-Amino-3-methylbutanoic acid               | (CH3)2CH-CH(NH2)-COOH             |
| W               | Trp               | Tryptophan                  | TGG                                     | 2-Amino-3-(lH-indol-3-yl)-propanoic acid    | ![Tryptophan]({{site.baseurl}}/assets/AA/tryptophan.gif)|
| X<sup>a</sup>   | Xaa               | unknown or 'other'          | NNN                                     |                                             |                                   |
| Y               | Tyr               | Tyrosine                    | TAC, TAT                                | 2-Amino-3-(4-hydroxyphenyl)-propanoic acid  | ![Tyrosine]({{site.baseurl}}/assets/AA/tyrosine.gif)|
| Z               | Glx               | Glutamic acid or Glutamine  |                                         |                                             |                                   |
| *               | *                 | Termination                 | TAA, TAG, TGA (translation termination) | HGVS addition (V2.0)                        |                                   |

<sup>a</sup>To prevent confusion, since 'X' has been used to indicate a translation stop codon, use 'Xaa' only.

* * * 

<a name ="ISCN"></a>

## ISCN cytogenetic band to chromosome positions

At the p

{:.table .table-bordered}
|  Chromosome |   Band    |     Position (hg19)           |     Position (hg38)           |
|:-----------:|:---------:|:-----------------------------:|:-----------------------------:|
|  chr1       |  p36.33   | pter  (1) –   2300000         | pter  (1) –   2300000         |
|  chr1       |  p36.32   |   2300001 –   5400000         |   2300001 –   5300000         |
|  chr1       |  p36.31   |   5400001 –   7200000         |   5300001 –   7100000         |
|  chr1       |  p36.23   |   7200001 –   9200000         |   7100001 –   9100000         |
|  chr1       |  p36.22   |   9200001 –  12700000         |   9100001 –  12500000         |
|  chr1       |  p36.21   |  12700001 –  16200000         |  12500001 –  15900000         |
|  chr1       |  p36.13   |  16200001 –  20400000         |  15900001 –  20100000         |
|  chr1       |  p36.12   |  20400001 –  23900000         |  20100001 –  23600000         |
|  chr1       |  p36.11   |  23900001 –  28000000         |  23600001 –  27600000         |
|  chr1       |  p35.3    |  28000001 –  30200000         |  27600001 –  29900000         |
|  chr1       |  p35.2    |  30200001 –  32400000         |  29900001 –  32300000         |
|  chr1       |  p35.1    |  32400001 –  34600000         |  32300001 –  34300000         |
|  chr1       |  p34.3    |  34600001 –  40100000         |  34300001 –  39600000         |
|  chr1       |  p34.2    |  40100001 –  44100000         |  39600001 –  43700000         |
|  chr1       |  p34.1    |  44100001 –  46800000         |  43700001 –  46300000         |
|  chr1       |  p33      |  46800001 –  50700000         |  46300001 –  50200000         |
|  chr1       |  p32.3    |  50700001 –  56100000         |  50200001 –  55600000         |
|  chr1       |  p32.2    |  56100001 –  59000000         |  55600001 –  58500000         |
|  chr1       |  p32.1    |  59000001 –  61300000         |  58500001 –  60800000         |
|  chr1       |  p31.3    |  61300001 –  68900000         |  60800001 –  68500000         |
|  chr1       |  p31.2    |  68900001 –  69700000         |  68500001 –  69300000         |
|  chr1       |  p31.1    |  69700001 –  84900000         |  69300001 –  84400000         |
|  chr1       |  p22.3    |  84900001 –  88400000         |  84400001 –  87900000         |
|  chr1       |  p22.2    |  88400001 –  92000000         |  87900001 –  91500000         |
|  chr1       |  p22.1    |  92000001 –  94700000         |  91500001 –  94300000         |
|  chr1       |  p21.3    |  94700001 –  99700000         |  94300001 –  99300000         |
|  chr1       |  p21.2    |  99700001 – 102200000         |  99300001 – 101800000         |
|  chr1       |  p21.1    | 102200001 – 107200000         | 101800001 – 106700000         |
|  chr1       |  p13.3    | 107200001 – 111800000         | 106700001 – 111200000         |
|  chr1       |  p13.2    | 111800001 – 116100000         | 111200001 – 115500000         |
|  chr1       |  p13.1    | 116100001 – 117800000         | 115500001 – 117200000         |
|  chr1       |  p12      | 117800001 – 120600000         | 117200001 – 120400000         |
|  chr1       |  p11.2    | 120600001 – 121500000         | 120400001 – 121700000         |
|  chr1       |  p11.1    | 121500001 – 125000000         | 121700001 – 123400000         |
|  chr1       |  q11      | 125000001 – 128900000         | 123400001 – 125100000         |
|  chr1       |  q12      | 128900001 – 142600000         | 125100001 – 143200000         |
|  chr1       |  q21.1    | 142600001 – 147000000         | 143200001 – 147500000         |
|  chr1       |  q21.2    | 147000001 – 150300000         | 147500001 – 150600000         |
|  chr1       |  q21.3    | 150300001 – 155000000         | 150600001 – 155100000         |
|  chr1       |  q22      | 155000001 – 156500000         | 155100001 – 156600000         |
|  chr1       |  q23.1    | 156500001 – 159100000         | 156600001 – 159100000         |
|  chr1       |  q23.2    | 159100001 – 160500000         | 159100001 – 160500000         |
|  chr1       |  q23.3    | 160500001 – 165500000         | 160500001 – 165500000         |
|  chr1       |  q24.1    | 165500001 – 167200000         | 165500001 – 167200000         |
|  chr1       |  q24.2    | 167200001 – 170900000         | 167200001 – 170900000         |
|  chr1       |  q24.3    | 170900001 – 172900000         | 170900001 – 173000000         |
|  chr1       |  q25.1    | 172900001 – 176000000         | 173000001 – 176100000         |
|  chr1       |  q25.2    | 176000001 – 180300000         | 176100001 – 180300000         |
|  chr1       |  q25.3    | 180300001 – 185800000         | 180300001 – 185800000         |
|  chr1       |  q31.1    | 185800001 – 190800000         | 185800001 – 190800000         |
|  chr1       |  q31.2    | 190800001 – 193800000         | 190800001 – 193800000         |
|  chr1       |  q31.3    | 193800001 – 198700000         | 193800001 – 198700000         |
|  chr1       |  q32.1    | 198700001 – 207200000         | 198700001 – 207100000         |
|  chr1       |  q32.2    | 207200001 – 211500000         | 207100001 – 211300000         |
|  chr1       |  q32.3    | 211500001 – 214500000         | 211300001 – 214400000         |
|  chr1       |  q41      | 214500001 – 224100000         | 214400001 – 223900000         |
|  chr1       |  q42.11   | 224100001 – 224600000         | 223900001 – 224400000         |
|  chr1       |  q42.12   | 224600001 – 227000000         | 224400001 – 226800000         |
|  chr1       |  q42.13   | 227000001 – 230700000         | 226800001 – 230500000         |
|  chr1       |  q42.2    | 230700001 – 234700000         | 230500001 – 234600000         |
|  chr1       |  q42.3    | 234700001 – 236600000         | 234600001 – 236400000         |
|  chr1       |  q43      | 236600001 – 243700000         | 236400001 – 243500000         |
|  chr1       |  q44      | 243700001 – qter  (249250621) | 243500001 – qter  (248956422) |
|  chr10      |  p15.3    | pter  (1) –   3000000         | pter  (1) –   3000000         |
|  chr10      |  p15.2    |   3000001 –   3800000         |   3000001 –   3800000         |
|  chr10      |  p15.1    |   3800001 –   6600000         |   3800001 –   6600000         |
|  chr10      |  p14      |   6600001 –  12200000         |   6600001 –  12200000         |
|  chr10      |  p13      |  12200001 –  17300000         |  12200001 –  17300000         |
|  chr10      |  p12.33   |  17300001 –  18600000         |  17300001 –  18300000         |
|  chr10      |  p12.32   |  18600001 –  18700000         |  18300001 –  18400000         |
