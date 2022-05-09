import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint32("v0")
	.swstring("v1")
	.swstring("v2")
	.uint16("v3")
	.uint16("v4")
	.uint16("v5")
	.uint32("v6")
	.uint32("v7")