import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint16("v1")
	.uint8("v2")
	.swstring("v3")
	.swstring("v4")
	.swstring("v5")
	.swstring("v6")
	.swstring("v7")
	.swstring("v8")
	.swstring("v9")
	.uint32("v10")
	.uint32("v11")
	.uint32("v12")
	.uint32("v13")
	.uint32("v14")
	.uint32("v15")
	.uint32("v16")
	.uint32("v17")
	.uint32("v18")
	.uint16("v19")
	.uint16("v20")
	.uint32("v21")
	.uint32("v22")
	.uint32("v23")
	.uint32("v24")
	.uint32("v25")
	.uint32("v26")
	.int16("v27")
	.int16("v28")
	.int16("v29")
	.int16("v30")
	.int16("v31")
	.uint8("v32")
	.uint32("v33")
	.uint32("v34")
	.uint32("v35")
	.uint16("v36")
	.floatle("v37")
	.int16("v38")
	.uint16("v39")
	.uint16("v40")
	.uint16("v41")
	.uint16("v42")
	.uint16("v43")
	.uint16("v44")
	.floatle("v45")
	.uint8("v46")
	.uint16("v47")
	.uint16("v48")
	.uint16("v49")
	.uint16("v50")
	.uint16("v51")
	.uint16("v52")
	.uint16("v53")
	.uint16("v54")
	.uint16("v55")
	.int16("v56")
	.uint16("v57")
	.uint16("v58")
	.uint16("v59")
	.uint32("v60")
	.uint32("v61")
	.uint32("v62")
	.uint32("v63")
	.uint32("v64")
	.uint32("v65")
	.uint32("v66")
	.uint32("v67")
	.uint32("v68")
	.uint32("v69")
	.uint32("v70")
	.uint32("v71")
	.uint32("v72")
	.uint32("v73")
	.uint32("v74")
	.uint32("v75")
	.uint32("v76")
	.uint32("v77")
	.uint32("v78")
	.uint32("v79")
	.uint16("v80")
	.floatle("v81")
	.uint32("v82")
	.uint32("v83")
	.uint16("v84")
	.uint8("v85")