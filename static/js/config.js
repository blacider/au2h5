var answer = [0,0,1,0,0,0,0,2,2];
var answer_content = [
		'即使时速50公里的汽车遭遇正面碰撞，儿童也会瞬间产生30倍于自己体重的前冲力，这种情况下，任何一个成年人都无法抱住孩子。同时大人还会在背后挤压小孩造成更严重的伤害，小孩反而成了大人的“安全气囊”。',
		'前排的安全气囊虽是为了使人免受伤害。但由于孩子上身较矮，气囊迸开的位置往往是在孩子的头顶，非但保护不了孩子，反而会造成伤害，甚至窒息死亡。因此，12岁以下儿童必须坐在后排。',
		'9个月以下或少于10公斤的小孩颈椎十分脆弱，使用反向安装能让婴儿的背部紧贴着安全座椅，当发生刹车、碰撞等情况，安全座椅都可以最大限度地缓冲撞击的冲击力，保护婴儿的安全。9个月后正向安装，可以给天性爱动的小孩更大的伸展空间。',
		'让小孩平躺，反而会因为惯性让孩子骨骼受到一定程度挤压。真正完全平躺的儿童座椅是不存在的，最多是半躺，倾斜角度在135度到170度之间，这样才能最大程度地保护孩子的脊椎和颈部。',
		'车辆震动容易将儿童安全座椅与安全带、安全座椅和原车座椅之间（特别是真皮座椅，光滑的表面更以产生滑动）产生空量，从而影响安全座椅的稳定性。最好养成每周检查儿童座椅固定稳定性的习惯。',
		'汽车座椅和安全带是专为成人设计的，不适合儿童体型。孩子使用成人的安全带，如果绑得太紧，车祸时会造成致命的腰部挤伤或脖子脸颊的压伤。如果绑得太松，发生车辆碰撞，又可能会从安全带和座椅之间的空当飞出去。',
		'0-15个月的婴儿适用摇篮安全座椅。0-4岁适合幼儿安全座椅，可双方向即向前或向后安装，适合不同体形幼儿使用。3、2-6岁适合幼童安全座椅。4-12岁的儿童需增高安全坐垫。',
		'二手的儿童安全座椅，很难了解其过去的使用背景。如果这些座椅有些部件(包括使用说明书)已经丢失，损坏，或已被召回，使用它会非常危险。塑料老化，或长期受压产生的裂痕，甚至曾经发生的碰撞，都可能使二手座椅存在故障隐患，导致出现交通事故时不能发挥应有的防护作用。',
		'国际上一般使用年龄和体重双重参照标准，由于儿童的个体发育差异，即使年龄没有达到参考标准，但是体重超出现有年龄的数值范围，一样需要更换大一号的座椅，这样才可以有效保证儿童的乘车安全。所以，最终参照标准是儿童的体重。'
	];
var questions = [
	'在车上，<br>我就是孩子的人肉安全椅，<br><span style="color:red;">紧紧抱住</span>他才最安心。',
	'只要有安全座椅我就放心了，<br>孩子爱看风景，<br><span style="color:red;">坐前排副驾驶位置</span>他最开心了。',
	'几个月大的小Baby<br>安全座椅要面朝汽车座椅<br><span style="color:red;">反向安装</span>才最安全。',
	'几个月大的小孩<br>骨架还比较软，<br>要是有<span style="color:red;">平躺式</span>的安全座椅就好了。',
	'安全带固定方式<br>安装起来比较麻烦，所以<br>我机智地将安全座椅<span style="color:red;">固定</span>好就不用再拆下来。',
	'不用儿童安全椅，<br>每次记得给孩子<br>绑上<span style="color:red;">成人安全带</span>也一样能保护他。',
	'孩子最小的时候需要安全座椅，<br>等到那个座椅坐不下了，<br>也就说明他<span style="color:red;">不需要</span>座椅了。',
	'新的太贵，<br>给孩子买<span style="color:red;">二手</span>的安全座椅<br>更划算。',
	'选择儿童<br>安全座椅主要参考的标准<br>是<span style="color:red;">体重</span>？'
	];
var number = 9;