import fitz
import os

def find_and_replace_text(input_pdf_path, output_pdf_path, client_details):
    doc = fitz.open(input_pdf_path)
    text_to_find = "Prepared for"
    page_ = doc[0]
    page_.insert_font(fontname='F0', fontfile=normalize_path("public/fonts/hk-grotesk/HKGrotesk-BoldLegacy.otf"))

    for page_num in range(len(doc)):
        page = doc[page_num]
        text_instances = page.search_for(text_to_find)
        for inst in text_instances:
            x0, y1 = inst.x0, inst.y1 + 5
            
            # Create a list of text lines to insert
            name = client_details.get("name")
            # Insert the text lines
            page.insert_textbox(fitz.Rect(x0, y1 - 3, x0 + 342, y1 + 18), name, fontsize=12, fontname="F0", align=fitz.TEXT_ALIGN_LEFT)

    doc.subset_fonts()
    doc.save(output_pdf_path, garbage=4, deflate=True, clean=True)
    doc.close()
    print(f"Text replacement complete. Output saved to {output_pdf_path}")

def normalize_path(path):
    return os.path.abspath(os.path.join(__file__,"..","..",path))

if __name__ == "__main__":
    details = {
        "name": "Deyomkar Dot Com Private Limited",
        "address": "123 Main St, Anytown, USA",
        "email": "test@example.com",
        "contactNo": "555-1234"
    }
    find_and_replace_text(normalize_path("public/Proposal_Cover_Sample.pdf"), normalize_path("public/Output_1.pdf"), details)