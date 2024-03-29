import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint32("v1")
	.uint8("v2")
	.uint8("v3")
	.uint16("v4")
	.uint32("v5")
	.uint32("v6")
	.uint32("v7")
	.uint32("v8")
	.uint16("v9")
	.uint8("v10")
	.uint32("v11")
	.uint32("v12")
	.uint32("v13")
	.uint16("v14")
	.uint8("v15")
	.uint8("v16")
	.uint8("v17")
	.uint8("v18")
	.uint32("v19")
	.swstring("v20")
	.uint8("v21")
	.uint8("v22")
	.uint32("v23")
	.uint32("v24")
	.uint32("v25")
	.uint32("v26")
	.uint32("v27")
	.uint32("v28")
	.uint8("v29")
	.uint8("v30")
	.uint8("v31")
	.uint8("v32")
	.uint8("v33")
	.uint32("v34")
	.uint32("v35")
	.uint32("v36")
	.uint32("v37")
	.uint32("v38")
	.int32("v39")
	.int32("v40")
	.int32("v41")
	.int32("v42")
	.int32("v43")
	.uint32("v44")
	.uint32("v45")
	.uint32("v46")
	.uint16("v47")
	.uint32("v48")
	.uint32("v49")
	.uint32("v50")
	.uint16("v51")
	.uint32("v52")
	.uint16("v53")
	.uint32("v54")
	.uint8("v55")
	.uint16("v56")
	.uint32("v57")
	.uint16("v58")
	.uint8("v59")
	.uint8("v60")
	.uint32("v61")
	.uint8("v62")
	.uint32("v63")
	.uint8("v64")
	.uint8("v65")
	.uint32("v66")
	.uint32("v67")
	.uint32("v68")
	.uint32("v69")
	.uint32("v70")