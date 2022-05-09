import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.uint16("v1")
	.uint32("v2")
	.uint32("v3")
	.uint8("v4")
	.uint16("v5")
	.uint32("v6")
	.uint32("v7")
	.uint16("v8")
	.uint16("v9")
	.uint32("v10")
	.uint32("v11")
	.uint32("v12")
	.uint32("v13")
	.uint32("v14")
	.uint32("v15")
	.uint32("v16")
	.uint32("v17")
	.uint32("v18")