import Image from "next/image";
import React from "react";

const OfficeLocations = () => {
  return (
    <div className="bg-[#F8FAFC] p-6 py-20 pb-[150px]">
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-[9%]">

=======
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-[9%]">
>>>>>>> 0b41c57b5e43c35c9aa9da84ab4ccc0e6f0813ff
        {/* Gambia */}
        <div className="border bg-white border-gray-200 hover:shadow-md transition duration-300 cursor-pointer rounded-xl py-4 px-6">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/800px-Flag_of_The_Gambia.svg.png"
            alt="Gambia Flag"
            width={40}
            height={40}
            className="rounded-[4px] mb-2 mt-1"
          />
          <h3 className="text-2xl mb-10 font-semibold text-[#282781]">
            The Gambia
          </h3>
          <p className="text-[#94A3B8] text-lg ">25 Kairaba Avenue KSMD</p>
          <p className="text-[#94A3B8] text-lg ">Serrekunda Banjul, Gambia</p>
          <p className="mt-5">
            <span className="text-[#64748B] text-lg">+220 7762666</span>
            <br />
            <span className="text-[#64748B] text-lg">+220 9972666</span>
          </p>
        </div>

<<<<<<< HEAD
=======
        <div className="border bg-white border-gray-200 hover:shadow-md transition duration-300 cursor-pointer rounded-xl py-4 px-6">
          <Image
            src="https://cdn.britannica.com/70/5070-050-8968E7E7/Flag-Senegal.jpg"
            alt="Gambia Flag"
            width={40}
            height={40}
            className="rounded-[4px] mb-2 mt-1"
          />
          <h3 className="text-2xl mb-10 font-semibold text-[#282781]">
            Senegal
          </h3>
          <p className="text-[#94A3B8] text-lg ">Cite Soprime extension</p>
          <p className="text-[#94A3B8] text-lg ">des Parcelles Assainies </p>
          <p className="mt-5">
            <span className="text-[#64748B] text-lg">+221 338358429</span>
            <br />
            <span className="text-[#64748B] text-lg">+221 771358271</span>
          </p>
        </div>

        <div className="border bg-white border-gray-200 hover:shadow-md transition duration-300 cursor-pointer rounded-xl py-4 px-6">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg"
            alt="Gambia Flag"
            width={40}
            height={40}
            className="rounded-[4px] mb-2 mt-1"
          />
          <h3 className="text-2xl mb-10 font-semibold text-[#282781]">
            Côte d&apos;Ivoire
          </h3>
          <p className="text-[#94A3B8] text-lg ">Adjame Marche Furum, </p>
          <p className="text-[#94A3B8] text-lg ">Abidjan, Côte d&apos;Ivoire</p>
          <p className="mt-5">
            <span className="text-[#64748B] text-lg">+225 70909033</span>
            <br />
            <span className="text-[#64748B] text-lg">+225 70909033</span>
          </p>
        </div>

        <div className="border bg-white border-gray-200 hover:shadow-md transition duration-300 cursor-pointer rounded-xl py-4 px-6">
          <Image
            src="https://framerusercontent.com/images/E15Cn2kxA9NL66peOyPLBBWU.png"
            alt="Gambia Flag"
            width={40}
            height={40}
            className="rounded-[4px] mb-2 mt-1"
          />
          <h3 className="text-2xl mb-10 font-semibold text-[#282781]">
            Guinea Conakry
          </h3>
          <p className="text-[#94A3B8] text-lg ">Commune de Ratome </p>
          <p className="text-[#94A3B8] text-lg ">T8 Carrefour Pharmacie</p>
          <p className="mt-5">
            <span className="text-[#64748B] text-lg">+224 621796232</span>
            <br />
            <span className="text-[#64748B] text-lg">+224 622973266</span>
          </p>
        </div>

>>>>>>> 0b41c57b5e43c35c9aa9da84ab4ccc0e6f0813ff
        <div className="border bg-white border-gray-200 rounded-xl hover:shadow-md transition cursor-pointer duration-300 py-4 px-6">
          <Image
            src="https://framerusercontent.com/images/17IjrFmXlJvzrSxzBMpE4tTmg8.png"
            alt="Gambia Flag"
            width={40}
            height={40}
            className="rounded-[4px] mb-2 mt-1"
          />
          <h3 className="text-2xl mb-10 font-semibold text-[#282781]">
            Sierra Leone
          </h3>
          <p className="text-[#94A3B8] text-lg ">No.49 Circular Road, </p>
          <p className="text-[#94A3B8] text-lg ">Freetown, Sierra Leone</p>
          <p className="mt-5">
            <span className="text-[#64748B] text-lg">+232 99718080</span>
            <br />
            <span className="text-[#64748B] text-lg">+232 75894577</span>
          </p>
        </div>

        <div className="border bg-white border-gray-200 hover:shadow-md transition duration-300 cursor-pointer rounded-xl py-4 px-6">
<<<<<<< HEAD
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA4VBMVEUAazrwCSP/0gAAAAD/6gDsACT5dxDp1gBIdjX/0wBzVwD/0AD/4AD/2gD/4gD/3AD/5gAAaTwAbDn/8AAdEQBLOABwWADVuADw1AD42gBGNwBfSgD4cBDCxAB1fAD//ACkhABWPQDNsQDtwACdfgBQQQDkugCPcwCqjQA4LABtUADdugCwjABmSwDgwQDoxwCjiQC8lgC0mQCFZgDlzAAsHgDUqwDHmgB5ZAAOCwBlVwCPawCCbABsWQAiFwCUfQA4JgCofwDDqgDnuQCxlwDWxADt4QCjkAA6cTVSfDRUgDXWL47dAAAEmUlEQVR4nO3be3fTNhjHcc9iA8WSHNo0iZNtpOmN3uIsLR2FDEopg/H+XxC+NYnzxHU6QI9O+/v0wB8cc47zrSXbsuP9Ass87h1wEJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCYUmFJpQaEKhCeX9Csu839zxO/cOFLwnrtj8488X3PuQ83xHBOGgFcog4N6PhDNNfLMthqEvkx9uzjQJd4TYVWiyyAyE2O6mQdijONMk3BNC7LP3SLnQJA2hO62kyUETc2wubaJeJknEoXLhQHGjifSjo7SJOA65d8Z3o0lC72RJxABNMulwMSd5k9OIe298J5qkzF7eRIwcmFDcaKLjVtFk0OTeF1eaqJsiiegZ/gPFjSZh47aJ2NHcO+NGEzkbOkKM+c88TjRRf82SiDaOk5R80p83aX1in1BcaKLlfOgIccJ+z+NCEzVZSCK22M/GLjTRZ4tNRMA9o7jQ5PxVqcnnMPBZh4+tJsnEqSqWyV9clJKIs82KDZuWZl97x4n+e7vRaLTbjWWvy4eJuHzTaDfKm7XT/3f61tKypL0msvtSfJf+SD60Jr408Zv/X6Q1MbbW9K3OsWF0Vv/hV9vq2Ls5tNYk+yXL5vBV/edfYaq0b+0ph+1zsYob9QWIC6tr19avT7QZt+ojlPwTG6u7aLlJtvZ63LtXkl2j7T4btNtEZtenYfceU+1hNrk+4CYF2Zy8WzPJtKvyIBarcDRJTkEq7tf3yC5KGG4Ime4BgzB8X5+kP2JZN2Bokk4PMpBmWDd+3kaa5QaZa61A+oGJX99V5Ora1n3wMs71E61Oqi9VjuJsAZ8jC8/YyceP728eVDYxt0nsV2FdZ5NR9dnnwu616yK+JsnvXw8vK5tMjc/1ahtbk+zlpA/VU+yWpQWkFViPE3XXwsG19pmycM4n6Sux1XYV134xNpHmzkvZq4hr9HA20Xff8+xzHSh817EyfyW22gHX2ZjxOAlPyg32li7geo9w7JitUoJp1Lw4XPyHyyHTg2O+JuWzTmvSlIE5L80wxZnH+tHC18SMFz5+P1YykMld4eKzwu3okV2fyHDhmBhHxTCRzeHCiPrI824bX5PO7CK2N1Tz7+2EUXs+eHjuedia6NkoaXdLJ11tZq8t9UKWUw9bE3NafPCb+UFSFFCj4k3zVsfyk50cVxMdF5Nrh64wzhewB+oxNTH5K7HT1c8qpLnOFrDTr2k8jvlE3p51roaVy9DFAva+ZvgiKdNxIuPkrNM/r7rLk36gVXr9MuC452Faow5vxOW4WXXtnh8Z5niP52saLE2kb47e1bx4lJyD0mfto5Bh7Dxl8ens6b9rbLY5+bzOZj+Y94zFl2f/rbXd1y8/dTdW8xg8z3+e12yVbuTVbvYwbGwkf9Iy6d9QWLvFxn02BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgpvgEDCxOIqaFGcAAAAABJRU5ErkJggg==" alt="Gambia Flag" width={40} height={40} className="rounded-[4px] mb-2 mt-1" />
          <h3 className="text-2xl mb-10 font-semibold text-[#282781]">Ghana</h3>
=======
          <Image
            src="https://framerusercontent.com/images/kB99X1Ji1PnoZZkvkwr3vcUflsM.png"
            alt="Gambia Flag"
            width={40}
            height={40}
            className="rounded-[4px] mb-2 mt-1"
          />
          <h3 className="text-2xl mb-10 font-semibold text-[#282781]">
            Liberia
          </h3>
>>>>>>> 0b41c57b5e43c35c9aa9da84ab4ccc0e6f0813ff
          <p className="text-[#94A3B8] text-lg ">Lynch street (H.Lafayette)</p>
          <p className="text-[#94A3B8] text-lg ">Monrovia</p>
          <p className="mt-5">
            <span className="text-[#64748B] text-lg">+231 55 589 5996</span>
            <br />
            <span className="text-[#64748B] text-lg">+231 55 589 5996</span>
          </p>
        </div>

<<<<<<< HEAD
=======
        <div className="border bg-white border-gray-200 hover:shadow-md transition duration-300 cursor-pointer rounded-xl py-4 px-6">
          <Image
            src="https://framerusercontent.com/images/uvDXjtVny123UPhqGcYZORZXbo.png"
            alt="Gambia Flag"
            width={40}
            height={40}
            className="rounded-[4px] mb-2 mt-1"
          />
          <h3 className="text-2xl mb-10 font-semibold text-[#282781]">Mali</h3>
          <p className="text-[#94A3B8] text-lg ">Lafiabougou Rond</p>
          <p className="text-[#94A3B8] text-lg ">Cabral, Mali, Bamako</p>
          <p className="mt-5">
            <span className="text-[#64748B] text-lg">+223 68166327</span>
            <br />
            <span className="text-[#64748B] text-lg">+223 68166327</span>
          </p>
        </div>

        <div className="border bg-white border-gray-200 hover:shadow-md transition duration-300 cursor-pointer rounded-xl py-4 px-6">
          <Image
            src="https://framerusercontent.com/images/I05b62ZydF6Pd8wx7W3pyzUU.png"
            alt="Gambia Flag"
            width={40}
            height={40}
            className="rounded-[4px] mb-2 mt-1"
          />
          <h3 className="text-2xl mb-10 font-semibold text-[#282781]">
            Cameroon
          </h3>
          <p className="text-[#94A3B8] text-lg ">Quartier: Essos Carrefour</p>
          <p className="text-[#94A3B8] text-lg ">Avenue Germain</p>
          <p className="mt-5">
            <span className="text-[#64748B] text-lg">+237 655737037</span>
            <br />
            <span className="text-[#64748B] text-lg">+237 651695846</span>
          </p>
        </div>
>>>>>>> 0b41c57b5e43c35c9aa9da84ab4ccc0e6f0813ff
      </div>
    </div>
  );
};

export default OfficeLocations;
