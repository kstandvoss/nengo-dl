Search.setIndex({docnames:["backend","builder","examples","examples/nef_init","examples/pretrained_model","examples/spa_memory","examples/spa_retrieval","examples/spiking_mnist","extra_objects","frontend","graph_optimizer","index","installation","introduction","learning_rules","neurons","op_builders","operators","processes","project","resources","signals","simulator","tensor_graph","tensor_node","training","utils"],envversion:53,filenames:["backend.rst","builder.rst","examples.rst","examples\\nef_init.ipynb","examples\\pretrained_model.ipynb","examples\\spa_memory.ipynb","examples\\spa_retrieval.ipynb","examples\\spiking_mnist.ipynb","extra_objects.rst","frontend.rst","graph_optimizer.rst","index.rst","installation.rst","introduction.rst","learning_rules.rst","neurons.rst","op_builders.rst","operators.rst","processes.rst","project.rst","resources.rst","signals.rst","simulator.rst","tensor_graph.rst","tensor_node.rst","training.rst","utils.rst"],objects:{"nengo_dl.builder":{Builder:[1,0,1,""],OpBuilder:[1,0,1,""]},"nengo_dl.builder.Builder":{build:[1,1,1,""],pre_build:[1,1,1,""],register:[1,1,1,""]},"nengo_dl.builder.OpBuilder":{build_post:[1,2,1,""],build_step:[1,2,1,""]},"nengo_dl.dists":{Glorot:[8,0,1,""],He:[8,0,1,""],TruncatedNormal:[8,0,1,""],VarianceScaling:[8,0,1,""]},"nengo_dl.dists.TruncatedNormal":{sample:[8,2,1,""]},"nengo_dl.dists.VarianceScaling":{sample:[8,2,1,""]},"nengo_dl.graph_optimizer":{create_signals:[10,4,1,""],display_signal_blocks:[10,4,1,""],greedy_planner:[10,4,1,""],hamming_sort:[10,4,1,""],mergeable:[10,4,1,""],noop_order_signals:[10,4,1,""],noop_planner:[10,4,1,""],order_signals:[10,4,1,""],remove_constant_copies:[10,4,1,""],remove_identity_muls:[10,4,1,""],remove_unmodified_resets:[10,4,1,""],remove_zero_incs:[10,4,1,""],signal_io_dicts:[10,4,1,""],sort_ops_by_signals:[10,4,1,""],sort_signals_by_ops:[10,4,1,""],transitive_closure_recurse:[10,4,1,""],transitive_planner:[10,4,1,""],tree_planner:[10,4,1,""]},"nengo_dl.learning_rule_builders":{SimBCMBuilder:[14,0,1,""],SimOjaBuilder:[14,0,1,""],SimPES:[14,0,1,""],SimPESBuilder:[14,0,1,""],SimVojaBuilder:[14,0,1,""],build_pes:[14,4,1,""]},"nengo_dl.learning_rule_builders.SimBCMBuilder":{build_step:[14,2,1,""]},"nengo_dl.learning_rule_builders.SimOjaBuilder":{build_step:[14,2,1,""]},"nengo_dl.learning_rule_builders.SimPESBuilder":{build_step:[14,2,1,""]},"nengo_dl.learning_rule_builders.SimVojaBuilder":{build_step:[14,2,1,""]},"nengo_dl.neuron_builders":{GenericNeuronBuilder:[15,0,1,""],LIFBuilder:[15,0,1,""],LIFRateBuilder:[15,0,1,""],RectifiedLinearBuilder:[15,0,1,""],SigmoidBuilder:[15,0,1,""],SimNeuronsBuilder:[15,0,1,""],SoftLIFRateBuilder:[15,0,1,""],SpikingRectifiedLinearBuilder:[15,0,1,""]},"nengo_dl.neuron_builders.GenericNeuronBuilder":{build_step:[15,2,1,""]},"nengo_dl.neuron_builders.LIFBuilder":{build_step:[15,2,1,""]},"nengo_dl.neuron_builders.LIFRateBuilder":{build_step:[15,2,1,""]},"nengo_dl.neuron_builders.RectifiedLinearBuilder":{build_step:[15,2,1,""]},"nengo_dl.neuron_builders.SigmoidBuilder":{build_step:[15,2,1,""]},"nengo_dl.neuron_builders.SimNeuronsBuilder":{build_step:[15,2,1,""]},"nengo_dl.neuron_builders.SoftLIFRateBuilder":{build_step:[15,2,1,""]},"nengo_dl.neuron_builders.SpikingRectifiedLinearBuilder":{build_step:[15,2,1,""]},"nengo_dl.neurons":{SoftLIFRate:[8,0,1,""]},"nengo_dl.neurons.SoftLIFRate":{rates:[8,2,1,""],step_math:[8,2,1,""]},"nengo_dl.op_builders":{CopyBuilder:[17,0,1,""],DotIncBuilder:[17,0,1,""],ElementwiseIncBuilder:[17,0,1,""],ResetBuilder:[17,0,1,""],ResetInc:[17,0,1,""],SimPyFuncBuilder:[17,0,1,""],SparseDotIncBuilder:[17,0,1,""]},"nengo_dl.op_builders.CopyBuilder":{build_step:[17,2,1,""]},"nengo_dl.op_builders.DotIncBuilder":{build_step:[17,2,1,""]},"nengo_dl.op_builders.ElementwiseIncBuilder":{build_step:[17,2,1,""]},"nengo_dl.op_builders.ResetBuilder":{build_step:[17,2,1,""]},"nengo_dl.op_builders.SimPyFuncBuilder":{build_step:[17,2,1,""]},"nengo_dl.op_builders.SparseDotIncBuilder":{build_step:[17,2,1,""]},"nengo_dl.process_builders":{GenericProcessBuilder:[18,0,1,""],LinearFilterBuilder:[18,0,1,""],LowpassBuilder:[18,0,1,""],SimProcessBuilder:[18,0,1,""]},"nengo_dl.process_builders.GenericProcessBuilder":{build_post:[18,2,1,""],build_step:[18,2,1,""]},"nengo_dl.process_builders.LinearFilterBuilder":{build_step:[18,2,1,""]},"nengo_dl.process_builders.LowpassBuilder":{build_step:[18,2,1,""]},"nengo_dl.process_builders.SimProcessBuilder":{build_post:[18,2,1,""],build_step:[18,2,1,""]},"nengo_dl.signals":{SignalDict:[21,0,1,""],TensorSignal:[21,0,1,""]},"nengo_dl.signals.SignalDict":{combine:[21,2,1,""],constant:[21,2,1,""],gather:[21,2,1,""],mark_gather:[21,2,1,""],op_constant:[21,2,1,""],scatter:[21,2,1,""]},"nengo_dl.signals.TensorSignal":{__getitem__:[21,2,1,""],broadcast:[21,2,1,""],full_shape:[21,5,1,""],load_indices:[21,2,1,""],minibatched:[21,5,1,""],reshape:[21,2,1,""]},"nengo_dl.simulator":{SimulationData:[22,0,1,""],Simulator:[22,0,1,""]},"nengo_dl.simulator.SimulationData":{__getitem__:[22,2,1,""],__init__:[22,2,1,""],get_param:[22,2,1,""]},"nengo_dl.simulator.Simulator":{check_gradients:[22,2,1,""],close:[22,2,1,""],get_nengo_params:[22,2,1,""],load_params:[22,2,1,""],loss:[22,2,1,""],reset:[22,2,1,""],run:[22,2,1,""],run_steps:[22,2,1,""],save_params:[22,2,1,""],soft_reset:[22,2,1,""],step:[22,2,1,""],train:[22,2,1,""],trange:[22,2,1,""]},"nengo_dl.tensor_graph":{TensorGraph:[23,0,1,""],with_self:[23,4,1,""]},"nengo_dl.tensor_graph.TensorGraph":{build_inputs:[23,2,1,""],build_loop:[23,2,1,""],build_step:[23,2,1,""],mark_signals:[23,2,1,""]},"nengo_dl.tensor_node":{SimTensorNodeBuilder:[17,0,1,""],TensorNode:[24,0,1,""],tensor_layer:[24,4,1,""]},"nengo_dl.tensor_node.SimTensorNodeBuilder":{build_post:[17,2,1,""],build_step:[17,2,1,""]},"nengo_dl.utils":{MessageBar:[26,0,1,""],NullProgressBar:[26,0,1,""],ProgressBar:[26,0,1,""],align_func:[26,4,1,""],configure_settings:[26,4,1,""],find_non_differentiable:[26,4,1,""],function_name:[26,4,1,""],minibatch_generator:[26,4,1,""],print_op:[26,4,1,""],sanitize_name:[26,4,1,""]},"nengo_dl.utils.ProgressBar":{finish:[26,2,1,""],next:[26,2,1,""],start:[26,2,1,""],step:[26,2,1,""],sub:[26,2,1,""]},nengo_dl:{dists:[8,3,0,"-"],graph_optimizer:[10,3,0,"-"],learning_rule_builders:[14,3,0,"-"],neuron_builders:[15,3,0,"-"],neurons:[8,3,0,"-"],op_builders:[17,3,0,"-"],process_builders:[18,3,0,"-"],tensor_graph:[23,3,0,"-"],utils:[26,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","classmethod","Python class method"],"2":["py","method","Python method"],"3":["py","module","Python module"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:classmethod","2":"py:method","3":"py:module","4":"py:function","5":"py:attribute"},terms:{"0b6daasv":[5,6,7],"0x293f04025c0":4,"2gb":[19,21],"byte":[4,21],"case":[3,4,5,6,7,10,13,19,21,22,25,26],"class":[0,1,4,7,8,9,10,11,13,14,15,17,18,21,22,23,24,26],"default":[3,5,6,7,8,10,14,19,22,23,24,25,26],"export":[5,6,7,22,25],"final":[5,7],"float":[8,10,14,21,22,23,24],"function":[1,3,4,5,6,7,10,14,15,17,18,19,21,22,23,24,25,26],"import":[3,4,5,6,7,13,19,25],"int":[5,8,10,21,22,23,24,25,26],"long":[4,8,19],"new":[3,8,10,19,20,21,22,26],"public":19,"return":[1,3,4,5,6,7,8,10,14,15,17,18,19,21,22,23,24,25,26],"switch":21,"true":[3,5,6,7,10,19,21,22,24,25,26],"try":[10,19,22],"var":26,"while":[4,5,22,25],AND:19,Added:19,And:3,BUT:19,But:[4,5,22],FOR:19,For:[4,5,6,7,8,13,19,22,25],NOT:19,One:10,Ops:19,PES:[14,19,25],THE:19,That:[5,6,12,13,19,22],The:[1,2,3,4,5,6,7,8,9,10,14,15,17,18,19,21,22,23,24,25,26],There:[9,25],These:[0,2,3,4,5,6,8,10,15,16,18,24,25],USE:19,Use:[12,19],Used:[19,21,26],WITH:19,__call__:4,__getitem__:[21,22],__init__:[1,7,22,26],abil:19,abl:25,about:[6,19,20,22,25],abov:[4,6,7,19,22,25],abs:8,absenc:8,absolut:[8,22],acc:[5,6],accept:[4,7,24,25],access:[4,7,9,19,22,25],accomplish:7,accord:[10,14,22,23,25],accur:[3,6,7,22],accuraci:[5,6,7],achiev:[7,25],across:[1,19,22,25],action:19,activ:14,actual:[5,6,21,22,25,26],adadelta:7,adadeltaoptim:7,adapt:8,add:[3,4,5,6,7,8,13,19,21,22,25,26],added:[5,19,21,23,25],adding:[1,15,18,19],addit:[3,6,7,8,11,22],addition:25,adjac:10,advanc:[20,21,26],advantag:[20,22],affect:[7,8,19,22,25],after:[1,3,4,5,7,8,10,17,18,19,22,24,25],again:3,aggress:19,agreement:11,ahead:10,algorithm:[10,19,25,26],align:[10,19],align_func:26,all:[4,5,6,7,10,12,13,15,18,19,21,22,23,25,26],all_sign:10,alloc:26,allow:[4,5,7,9,12,13,19,22,24],allow_growth:[19,26],almost:7,along:[21,26],alpha:5,alreadi:19,also:[3,4,7,8,12,13,19,21,22,24,25],altern:[7,25],alwai:[7,8,19,21,22],amount:8,amplitud:[7,8,19],analog:[8,24],analyt:22,ani:[1,3,4,5,6,7,8,10,15,17,18,19,22,23,24,25,26],anoth:[3,5,7],answer:5,anymor:4,anyth:[7,12],apach:19,api:11,appear:[1,14,15,17,18,23],append:4,appli:[3,7,14,19,24,25,26],applic:8,appliedbrainresearch:19,appreci:19,approach:4,appropri:[15,18],approxim:[3,6,7],april:11,arang:[6,22],arbitrari:[22,24],arbitrarili:3,aren:19,arg:4,arg_scop:4,argmax:[5,6,7],argument:[7,11,19,24,26],aris:19,around:[8,19],arrai:[4,5,6,8,10,19,21,22,25,26],arrang:10,array_lik:8,art:4,artifici:[4,8],arxiv:8,as_dict:22,asarrai:5,ask:20,aspect:[1,5,17,18,22,25],assess:[5,6],assign:[19,22,25],assign_from_checkpoint_fn:4,associ:[1,5,6,10,14,19,22,23],assum:25,astyp:4,atol:22,attempt:10,attr:[21,22],attribut:[5,14,15,18,19,21,24,25],august:11,author:19,automat:[7,19],avail:[19,22],averag:[8,19,22],average_pooling2d:7,avoid:[6,19,21],awai:21,axes:5,axi:[4,5,6,7,21],back:25,backend:22,backport:19,backpropag:[19,22,25],backward:25,band:3,bar:[6,19,22,23,26],base:[3,4,5,7,8,10,19,21,24,25],base_arrai:10,baselin:6,basi:26,basic:[0,11,16],batch:[4,7,19],batch_siz:22,becaus:[4,7,25],becom:22,been:[1,3,4,5,6,10,17,18,19,22],befor:[5,7,10,25],begin:[3,21,26],behaviour:25,being:[1,3,5,6,7,19,21,22,25],below:[7,12,22,25],bengio:8,best:[3,12],better:19,between:[5,6,10,22,25,26],beyond:[22,25],bia:[5,8],bias:[7,22,23,25],bind:[5,6],biolog:[4,7],bit:[6,22],black:5,blank:10,blob:8,block:[10,23],bool:[10,21,22,24,25,26],both:[13,25],bottleneck:22,bottom:25,bound:[5,6],bptt:25,brain:19,brief:[5,25],broadcast:21,browser:[22,25],bsd:19,bug:[19,20],build:[0,1,3,4,5,6,7,10,11,14,15,17,18,19,22,23],build_input:23,build_loop:23,build_loss:19,build_network:7,build_optim:19,build_p:14,build_post:[1,17,18],build_step:[1,14,15,17,18,23],builder:[0,10,11,19,22],builder_typ:10,built:[1,6,7,17,18,19,22,23],builtconnect:22,builtensembl:22,bypass:19,bytesio:4,cach:[10,19],calcul:[6,14,19,25],call:[1,4,14,15,17,18,19,22,24,25],callabl:[4,21,22,24,26],can:[2,3,4,5,6,7,8,10,12,14,15,18,19,21,22,23,24,25,26],candid:10,cannot:22,capabl:6,captur:25,car:4,care:21,cast:[4,7],cast_dtyp:19,caveat:25,cconv:[5,6],ccorr:5,certain:[7,19],challeng:7,chang:[5,7,10,13,14,19,22,25,26],charact:[10,26],charg:1,check:[3,4,5,6,10,13,19,22,24,25],check_gradi:22,checkbox:25,checkpoint:4,checkpoints_dir:4,chmod:4,choic:[5,7],choos:11,chosen:3,chosen_op:10,chri:8,chrome:22,chunk:3,circular:[5,6],circularconvolut:[5,6],ckpt:4,claim:19,classif:[4,7,8],classifi:[4,7],classification_error:7,classmethod:1,clear:22,clearli:19,clone:[4,12],close:[3,6,7,19,22,25],closer:[5,7],closur:10,clumber:4,cocker:4,code:[4,7,9,11,13,21,24,25],codespel:19,cognit:6,collect:[3,4,6,19,22,25],color:5,com:[4,5,6,7,8,12,19],combin:[5,10,21],come:[4,6,10],command:[22,25],comment:19,commerci:19,common:[4,7,22],commun:[19,22],compar:25,compat:19,complet:[3,5,7,22],complex:6,complic:[4,5,6,12,19],compon:[4,7,19,25],comput:[1,3,5,6,7,8,10,12,13,14,15,17,18,19,21,22,23,24,25,26],concaten:[5,21],concert:22,condit:22,confer:8,config:[3,5,6,7,19,22,23,25,26],configur:[5,19,25,26],configure_set:[7,19,25,26],configure_train:19,confirm:3,conflict:[23,25],conn:[7,25],connect:[3,4,5,6,7,8,13,14,19,22,23,24,25,26],consid:[15,18,19,25],consist:[5,6,19,26],consol:19,constant:[1,5,8,10,19,21,24],construct:[0,3,4,5,6,7,8,10,11,13,19,22,24,25],constructor:1,consult:25,consum:22,contact:19,contain:[4,10,19,21,22,25],context:19,contigu:[10,21],continu:[8,22],contract:19,contrib:[4,7],contribut:11,contributor:11,control:[7,19,22,25,26],conv2d:7,conv_prob:5,convent:19,convert:[4,10,16,19],convolut:[5,6,7,13],convolv:[5,6],copi:[10,17,19,21],copybuild:[10,17],copyright:19,correct:[5,6,19,22,25],correctli:19,correspond:[1,5,6,8,10,14,15,17,18,21,22,25,26],cost:19,could:[3,4,6,7,8,10,22,25],cours:25,cover:19,coverag:19,cpu:[3,13,19,22,23],creat:[3,4,5,6,10,19,21,22,23,24,25,26],create_point:5,create_readable_names_for_imagenet_label:4,create_sign:10,creation:[6,19,25],critic:[15,18],cross:7,cuda:22,cue:[5,6],cue_idx:[5,6],cue_inp:[5,6],cued:[5,6],cumsum:5,cupti:22,current:[4,8,19,21,22,24],curv:[7,8],custom:[12,15,18,19,22,25],cutoff:21,cycl:19,d_input:26,d_output:26,damag:19,data:[3,4,5,6,7,10,13,19,21,22,23,25,26],dataset:[3,4,7],dataset_util:4,dcb135e6a60a:7,deal:19,debug:[10,14,19,21,24],decai:8,decemb:11,decis:22,decod:[19,25],deconvolv:5,decor:[1,23,26],deep:[3,4,7,8,22,23,24,25],def:[3,4,5,6,7,24,25],default_image_s:4,defin:[3,4,5,6,7,13,19,22,24,25,26],definit:19,delet:4,delta:14,delv:8,demand:25,demonstr:[5,19],denot:6,dens:[7,21],dense_to_one_hot:7,depend:[3,7,8,10,12,19,25],depict:10,deprec:[7,19],deriv:[8,19],descent:[3,7],describ:[21,23,25],descript:[23,26],design:[22,24],desir:[5,6,21,22,25,26],detail:[3,6,13,19,22,25,26],detect:19,determin:[8,22,23],determinist:19,develop:[3,7,11,22],deviat:8,devic:[3,19,23],dict:[1,7,10,19,21,22,24,25,26],dictionari:[1,3,10,22,25],differ:[3,4,5,6,7,10,13,15,18,19,21,22,25],differenti:[3,6,7,22,26],difficulti:8,digit:7,dim:[5,6],dimens:[5,6,7,8,14,19,21,22,26],dimension:[3,4,5,6,7,8,19,25],direct:[19,22],directli:[6,7,10,13,19,22],directori:[2,19,22],disabl:[19,22,25,26],discard:22,discuss:22,displai:[4,19,22,26],display_signal_block:10,dist:[3,5,7,8,19],distanc:8,distinct:6,distinguish:10,distribut:[7,11,19,25],divid:26,divis:[19,22,26],do_train:[5,6,7],doc:[2,19],document:[2,3,7,11,12,19,20,22,25,26],doe:[3,7,10,14,19,21,22,25,26],doesn:[1,3,5,7,10,14,15,17,18,19,21,22,23,25,26],dog:6,don:[7,19,22,24,25],done:[4,10],dot:[5,6],dotinc:[10,17,19],dotincbuild:17,down:[15,18,22],download:[4,5,6,7],download_and_uncompress_tarbal:4,drawn:22,drive:[5,6,7],drop:22,dropout:7,dst:[17,21],dtype:[4,21,23,26],due:8,duplic:[13,19,21],durat:26,dure:[4,5,7,8,12,19,22,25],dynam:[2,3,11,25],each:[1,3,4,5,6,7,10,14,15,17,18,19,21,22,23,25,26],earli:19,easier:[3,7,19,21],easili:[4,7,19],effect:[1,14,15,17,18,19,23,25],effici:[10,19,22],either:[21,22,25,26],element:[4,6,10,11,16,19,21,22,24,26],elementwis:22,elementwiseinc:[10,17],elementwiseincbuild:17,eliasmith:[7,8],els:[4,5,6,7,10,25],empti:21,encapsul:4,encod:[5,6,19,22,23,25],end:[0,21,26],engin:3,english:4,englishcockerspaniel_simon:4,enough:25,ens0:3,ens1:3,ens2:3,ens:[7,13,25],ens_param:7,ensembl:[3,5,6,7,13,22,23,24,25,26],ensur:[6,23,25,26],entir:22,entri:25,entropi:7,enumer:[4,8],env:7,epoch:[3,5,22,25],equat:25,equival:[10,19],eric:8,error:[3,5,6,7,14,19,22,25],essenti:5,eta:4,etc:22,evalu:[5,6],even:[1,7,14,15,17,18,19,23],evenli:[19,22],event:19,everi:24,everyth:[22,25],exactli:13,exampl:[3,4,5,6,7,11,13,19,22],example_input:5,exc_info:4,except:[4,24,25,26],execut:[1,4,10,13,14,15,17,18,19,22,23,24],exhaust:10,exist:[4,19],expand_dim:4,expect:[3,4,6,7,22],expertis:4,explain:22,explicitli:[6,22,23],explor:6,expos:22,express:[7,19],extend:5,extern:25,extra:[9,11,22,26],extra_fe:[19,22],extract:[5,7,19,22],extract_imag:7,extract_label:7,extractal:[5,6,7],f_p:3,factor:8,fals:[4,5,6,7,10,19,21,22,23,24,25,26],familiar:20,fan_avg:8,fan_in:[8,19],fan_out:[8,19],faster:[3,13,19,22],featur:[7,9,13,19,20,22,25],fed:23,feed:[4,6,7,19,22],feedabl:19,feedforward:8,feel:19,fetch:21,fewer:19,fifth:5,figsiz:[5,6],figur:[3,4,5,6,7],file:[4,7,11,22],filepath:22,fill:[5,6,10],fill_inp:5,filler:[5,6],filler_:[5,6],filler_nam:[5,6],filter:7,find:[10,19,25,26],find_non_differenti:26,fine:5,finish:[3,4,5,6,7,26],finish_msg:26,finit:26,fire:[7,8],first:[3,4,5,6,7,8,19,21,22,25,26],fit:[6,19],fix:[1,19],flake8:19,flatten:4,float32:[7,10,22],float64:[10,22],float_typ:10,follow:[5,6,25],fontsiz:5,forc:[21,22],force_copi:21,form:[6,10,14,21,22,25],format:[19,22],former:9,forum:20,forward:[5,25],found:[2,6,7,25],fourth:5,framework:[3,13],free:[19,22],fri4t3dmwc1vqjdzre0:5,fri4wnzxseszrxf1sjg:5,fri4wwp0zfm1xznfmja:7,fri4zmj1rwztdvpyqta:6,from:[1,3,4,5,6,7,8,10,12,14,15,17,18,19,21,22,24,25,26],front:0,frozenset:10,full:[5,6,7,10,19,22,25],full_shap:21,fulli:19,func:[4,23,26],function_nam:26,functool:5,further:[3,5,7,25,26],futur:[7,19,25],gain:[5,8],gather:[19,21],gave:6,gener:[1,3,5,6,8,17,18,19,20,22,24,25,26],genericneuronbuild:15,genericprocessbuild:18,get:[5,6,7,10,12,19,20,22,26],get_binding_data:5,get_data:6,get_memory_data:5,get_model_vari:4,get_nengo_param:[19,22],get_param:22,gfile:4,git:[4,12],github:[4,8,11,12,19,20],give:[10,21,22],given:[5,6,7,10,19,21,22,24,25,26],global:22,glorot10a:8,glorot:[7,8],goal:[5,6,25],goe:12,going:[4,7],good:[3,19],googl:[5,6,7],gpl:19,gpu:[12,13,19,22,23,26],gpu_opt:[19,26],grad:22,gradient:[3,7,19,22,25],gradientdescentoptim:22,graph:[0,1,4,11,14,15,16,17,18,19,22,26],graph_optim:10,graphdef:21,great:5,greater:22,greedi:10,greedy_plann:10,ground:10,group:[1,10,14,15,17,18,21],guarante:[10,21],had:[19,22],hamming_sort:10,handl:[6,19,21,26],handwritten:7,happen:10,hard:21,has:[1,3,4,5,6,7,8,10,17,18,19,21,22,24,25],have:[3,4,5,10,15,18,19,21,22,23,24,25,26],held:8,help:[5,19,20,21,22,25,26],here:[3,4,6,7,20,22,25],heurist:10,high:4,highli:6,highlight:5,histogram:25,histori:11,holder:19,hood:13,how:[1,3,4,5,6,7,8,13,19,22,25],howev:[3,4,7,12,13,20,22,25],http:[4,5,6,7,8,12,19,22,25],human:8,hunsberg:[7,8],hyperparamet:5,idea:[5,7,19],ideal:[5,25],ident:19,identifi:22,idx1:7,idx3:7,idx:[5,6],ignor:[5,7],illeg:26,illustr:[6,25],imag:[4,7],image_shap:4,image_str:4,imagenet:[4,8],impact:[5,22],implement:[1,4,6,7,14,15,18,19,22,24,25],impli:19,improv:[3,5,6,7,10,12,19,22],imshow:[4,7],inc:[10,14,19,21],incep_nod:4,incep_p:4,incept:4,inception_preprocess:4,inception_v1:4,inception_v1_2016_08_28:4,inception_v1_arg_scop:4,inceptionnod:4,inceptionv1:4,incl:8,includ:[4,5,7,8,10,12,19,21,22,23,25],include_glob:22,include_loc:22,include_prob:22,include_train:22,incom:[22,25],incorpor:4,incorrect:[19,25],incorrectli:7,increas:[7,10,19,22],independ:22,index:[4,10,21],indic:[5,6,10,21,25],individu:[5,10,22],infer:[19,21,24],influenc:[6,25],info:19,inform:[5,6,11,13,22,25],init_fn:4,init_op:8,initi:[1,3,4,5,6,7,8,10,17,18,19,21,22,24,25,26],inlin:[3,4,5,6,7],inp:[7,13],input:[3,4,5,6,7,8,10,13,19,22,23,24,26],input_a:[5,6],input_b:[5,6],input_fe:[5,6,7],input_nod:4,input_p:4,input_shap:4,insert:[2,9,11,13,21,22,24,25,26],insid:19,instal:[4,11,13,19,22],instanc:[5,6,14,22,25],instead:[3,4,6,7,15,18,19,22,24,25],instruct:[7,12,13,19],int_step:5,integ:[10,19],integr:24,intellig:8,interact:9,interactivesess:19,intercept:7,interest:5,interfac:19,intermedi:[5,25],intermix:[19,22],intern:[4,7,8,19,22],interpret:[7,19],introduc:5,introduct:11,invers:6,invert_b:[5,6],involv:[5,6],ipython:[2,7],irish:4,is_nan:5,is_train:4,isn:[4,19,24],issu:[11,20],item:[5,6,10,19,21,22,26],iter:[5,6,10,19,22,23,26],itertool:5,its:[5,12,19,22,24,25],jian:8,job:3,join:[4,5,6],jpg:4,json:22,jth:14,juli:11,june:11,jupyt:[2,19],just:[3,7,8,10,22],kaim:8,keep:[4,7,25],kei:[4,6,21,22],kernel:19,kernel_s:7,keyword:26,kind:[19,25],know:[1,10,19,22],knowledg:20,known:[1,8,22,25],kwarg:[10,22,26],label:[3,4,5,7,14,21,22,24,25],label_1:25,label_2:25,lambda:[3,4],larg:[6,19,21,25],larger:[4,8,10,22],largest:10,lasagn:19,last:[3,5,7],later:21,latest:12,latter:21,launch:26,layer:[7,19,24],layer_arg:24,layer_func:24,leak:19,learn:[0,3,4,5,6,7,8,11,16,19,22,23,24,25],learning_r:[3,5,7,14,22,25],learning_rule_build:14,learningrul:14,least:25,leav:25,left:[4,7,22,25],legend:[3,5,7],len:[6,10],length:[5,7,21,22,23],less:[22,25],level:[8,19,25,26],liabil:19,liabl:19,lib:7,librari:19,libx64:22,licens:11,lif:[7,8,13,15,19,22],lif_arg:8,lif_neuron:7,lifbuild:15,lifrat:[7,8,15,19],lifratebuild:15,like:[2,3,4,5,6,7,10,19,22,25],limit:[3,8,19,21,22,25],line2d:4,line:[4,10,13],linear:[6,7,8,19],linearfilt:18,linearfilterbuild:18,link:24,linspac:3,list:[1,10,12,14,15,17,18,21,22,23,25,26],live:19,load:[4,6,7,19,21,22,24],load_indic:21,load_param:[5,6,7,22],loc:[5,7],local:22,localhost:[22,25],locat:2,log:26,logdir:[22,25],logger:19,logic:[7,21,22],logit:[4,7],longer:[3,7,19],look:[3,5,6],loop:[22,23],loss:[3,5,7,19,22,25],lot:25,low:[4,19],lower:7,lowpass:[18,19],lowpassbuild:18,lucasdemarchi:19,mac:12,made:[19,22],mai:[1,4,7,9,11,17,18,21,22,23,25],main:[4,9,22,25],mainli:[21,22],maintain:[5,19],make:[3,5,6,7,11,20,21,22,25],makedir:4,manag:[1,23],mani:[7,10,22,24,25],manipul:6,manual:[12,19,21,22,23,25],map:[1,3,5,10,14,15,17,18,19,21,24,25],march:11,mark:[21,23],mark_gath:21,mark_sign:23,master:8,match:[10,19,22],materi:19,mathemat:6,matplotlib:[3,4,5,6,7,19],matric:[8,25],matrix:[19,24],matter:5,max_depth:10,max_rat:[3,7],max_similar:[5,6],max_valu:26,maximum:26,maybe_download:7,mean:[3,5,6,7,8,13,19,22,23,25],measur:[3,5,7],mediocr:6,mem_binding_param:5,mem_param:5,mem_step:5,membran:8,memor:5,memori:[10,11,19,22,25,26],memory_prob:5,mention:25,merchant:19,merg:[10,19,21],mergeabl:10,mess:10,messag:[19,26],messagebar:26,method:[3,7,8,13,19,22,23,25,26],metric:[5,6],middl:[10,26],might:[4,6,22],mimic:[7,24],mind:25,mini:22,minibatch:[10,19,21,22,25,26],minibatch_gener:26,minibatch_s:[3,5,6,7,10,19,21,23,24,25,26],miniconda3:7,minim:[6,12,22,25],minimum:19,minor:19,miscellan:[0,11],miss:19,mit:19,mlr:8,mnist:7,mnist_data:7,mnist_param:7,mode:[8,21],model:[1,2,7,8,9,10,11,13,14,15,17,18,19,22,23,24],modifi:[1,5,6,7,10,12,14,17,18,19,21,25],moment:21,momentum:[3,19,25],momentumoptim:[3,25],more:[3,4,5,6,7,8,10,12,13,14,19,22,25,26],most:[5,6,22],move:[15,18],mse:[3,5,6,19,22],msg:26,much:[5,22,24],multidimension:19,multipl:[1,10,17,18,19,22,25],must:[21,22,23,25,26],my_conn:19,my_en:[22,25],my_ensembl:[25,26],my_func:25,my_nod:22,my_object:25,my_objective0:25,my_objective1:25,my_prob:22,my_probe0:25,my_probe1:25,n_epoch:[3,5,6,7,22,25],n_input:[5,6,25],n_item:6,n_neuron:5,n_pair:[5,6],n_pass:10,n_step:[5,6,7,19,22,25],name:[4,5,19,21,22,24,26],nan:[5,19],nativ:[15,18],natur:4,navig:[22,25],nbsphinx:19,nbval:19,ndarrai:[21,22,24,26],ndim:21,necessari:[4,19,22],need:[1,3,4,6,7,9,12,14,15,17,18,21,22,24],nef:3,nengo:[1,2,5,6,7,9,10,11,12,14,15,16,18,19,20,21,22,23,24,25,26],nengo_dl:[1,3,4,5,6,7,8,10,13,14,15,17,18,19,21,22,23,24,25,26],nengo_dl_profil:22,nengo_extra:8,nengo_obj:22,nengo_ocl:10,nengo_op:1,nengodl:[0,2,3,4,8,9,17,20],nengoobject:[22,24],nesterov:3,net:[3,4,5,6,7,13,22,23,25,26],network:[2,3,6,8,11,13,19,22,23,24,25,26],neural:[2,3,4,8,11,13,19,24,25],neuron:[0,5,6,7,11,14,16,19,22,23,24,25],neuron_build:[15,22],neuron_typ:[3,5,6,7,13],neurontyp:[7,15,24],never:[10,25],new_net:22,new_plan:10,next:[3,4,5,6,7,10,26],nightli:19,node:[3,4,5,6,7,13,19,22,23,24,25,26],nois:3,non:[7,10,19,22,26],none:[1,3,4,5,6,7,8,14,15,17,18,19,21,22,23,24,25,26],noninfring:19,nonlinear:[7,24],nonzero:26,noop_order_sign:10,noop_plann:10,normal:[4,6,7,8,10,22,25],not_equ:7,note:[1,3,4,5,7,8,10,14,15,17,18,21,22,25,26],notebook:[2,6],noth:26,notic:19,now:[3,4,5,6,7,19,22],nullprogressbar:26,num_class:4,number:[1,3,4,5,6,7,8,10,13,14,17,18,19,21,22,23,24,25,26],numer:[19,21,22],numeric_grad:22,numpi:[3,4,5,6,7,8,12,13,19,21,22,25],numpydoc:19,obj:[19,22],object:[0,1,4,5,6,7,9,10,11,14,19,21,22,23,24,26],octob:11,off:[4,7,25],offici:7,offlin:25,offset:26,often:[7,25],old:19,onc:[4,5,7,14,19,22,24],one:[3,4,5,6,7,10,19,21,22,23,25,26],one_hot:7,onerror:4,ones:[5,22],onli:[0,3,6,7,10,13,19,21,22,25,26],onlin:25,op_build:[1,17],op_const:21,op_list:10,op_siz:21,opbuild:1,open:[4,19,22,25],oper:[0,1,4,11,14,15,18,19,21,22,23,24,25,26],oppos:19,ops:[1,10,14,15,17,18,19,21,22,23,25],opt:[3,7],optim:[0,2,4,9,11,13,19,22,23,24,26],option:[1,4,7,8,10,14,15,17,18,19,21,22,24,26],order:[5,6,7,9,10,19,21,22,25],order_sign:10,org:[4,8],organ:[10,19,22,25],origin:10,other:[4,5,6,10,19,22],otherwis:[8,19,21,22,23],our:[3,4,5,6,7,19,22,25],out:[3,4,6,7,10,13,15,18,19,25],out_p:7,outer:22,output:[1,3,4,5,6,7,8,10,13,14,15,17,18,19,22,23,24,25,26],output_dtyp:26,output_prob:5,output_shap:26,outsid:23,outweigh:22,over:[5,6,7,10,22,25],overal:[8,10,25],overhead:22,overrid:[22,25,26],overridden:[22,25],override_valu:22,overwrit:[21,22],own:[5,7,22,25],packag:[2,7,12,19,24],page:19,pair:[5,6,22],paper:19,parallel:22,param:[14,19,22],paramet:[1,2,5,6,7,8,9,10,11,13,14,15,17,18,19,21,22,23,24,26],pars:[5,6],part:[4,10,19,24],partial:5,particip:10,particular:[3,19],particularli:[5,6],pass:[3,5,7,10,19,22,23,24,25,26],past:26,patch:19,path:[4,22],pattern:7,pdf:8,peopl:19,per:[1,17,18,26],percentag:7,perfect:5,perform:[4,5,6,7,8,10,12,15,18,21,22,24,25],period:[5,8,22],permiss:19,permit:19,pes:14,phase:5,pick:6,piec:6,pil:[4,19],pillow:19,pip:[12,19],place:[1,10,17,18],plan:[7,10,26],planner:[10,19,26],pleas:[7,19],plot:[3,4,5,7,25],plot_memory_exampl:5,plot_retrieval_exampl:5,plt:[3,4,5,6,7],point:[4,9,10,21,22,23],pointer:[2,11,19],pool:7,pool_siz:7,poor:5,popul:[1,3],portion:19,posit:10,possibl:[1,10,12,14,15,17,18,25,26],post:[3,20,24],post_build:[4,19,24],potenti:10,power:7,practic:[5,6,13,22,25],pre:[1,3,4,5,19,22,23],pre_build:[1,4,19,24],pre_filt:14,precis:[10,21,22,23],prepend:26,preprocess:4,preprocess_imag:4,present:[5,6,7,19,26],presentinput:7,press:8,presynapt:14,pretrain:[4,5,6,7,24],pretti:3,prevent:26,previou:[3,5,7,19,22],print:[3,4,5,6,7,13,19,22,24,26],print_funct:19,print_op:26,print_param:19,prior:5,prioriti:10,probabilit:4,probabl:4,probe:[3,4,5,6,7,13,19,22,23,25,26],probe_data:22,probe_tensor:23,procedur:5,proceed:8,process:[0,1,3,4,5,7,8,11,12,16,19,22,23,25,26],process_build:[18,22],processed_imag:4,prod:4,produc:[4,5,6,7,25],profil:[19,25],progress:[19,22,23,26],progress_bar:[19,22],progressbar2:19,progressbar:[19,23,26],project:11,propag:25,properli:19,properti:25,proprietari:19,provid:[3,4,5,6,19,24,25],psf:19,pull:11,purchas:19,purpos:[6,14,19],pypi:[11,19],pyplot:[3,4,5,6,7],pytest:19,python:[4,7,12,15,18,19,24],quantifi:7,queri:5,question:20,quick:[4,7],quicker:6,quickli:8,rais:[4,22,26],ramp:5,randint:[5,6],randn:25,random:[1,3,5,6,8,17,18,22,24,25,26],randomli:[5,25],randomst:[1,5,6,8,17,18,24,26],rang:[3,4,5,6,7,22,25],rank:19,rare:6,rate:[5,6,7,8,14,19],rather:[3,4,5,19,22,25],read:[4,10,14,19,21],read_data_set:7,readi:[3,4,7],rearrang:10,reason:[7,25],rebuild:[7,19,22],recal:7,recommend:[12,22],recomput:[1,5,6],rectifi:[6,7,8],rectifiedlinear:[3,5,6,15],rectifiedlinearbuild:15,recurr:5,red:[4,6],reduc:[7,10,19,25,26],reduce_mean:[5,7,25],refer:[2,6,8,10],refractori:8,regardless:25,regist:1,registri:1,regular:[4,24],reinforc:4,reinstal:19,rel:[4,7,8,22],relat:19,releas:11,relev:[0,19],reli:21,reliabl:19,remain:21,rememb:5,remov:[7,10,19,26],remove_constant_copi:10,remove_identity_mul:10,remove_unmodified_reset:10,remove_zero_inc:10,ren:8,renam:19,reorder:10,reorgan:19,repeat:[10,19,22],repeatedli:22,replac:[8,22,26],repo:4,report:20,repositori:4,repres:[4,10,21,22,23,24,25,26],represent:[5,7],request:[4,5,6,7,11,20],requir:[3,4,11,15,18,19,20,22,23,24,25],resampl:8,research:[4,19],reseed:19,reset:[4,10,17,19,22,24],resetbuild:17,resetinc:17,reshap:[4,7,19,21,24],resid:[10,19],resourc:[11,22],respect:[5,7,10,22],rest:[4,7,24],restart:22,restrict:10,restructur:10,result:[3,6,19,22,25],resum:19,retent:5,retriev:[6,11,19],return_conn:[7,24],reus:19,rework:19,rid:10,right:[5,21],rms:3,rmspropoptim:[5,6],rmtree:4,rng:[1,4,5,6,8,17,18,24,26],role:[5,6],role_:[5,6],role_inp:5,role_nam:[5,6],round:19,row:10,rtol:22,rule:[0,3,11,16,19,23,25],run:[2,3,4,5,6,7,8,11,13,19,25],run_0:22,run_step:[7,19,22],s_iwusr:4,safe:19,sai:[5,6],sake:25,same:[4,5,7,10,13,14,19,21,22,24,25,26],sampl:[4,8,22],sanit:26,sanitize_nam:26,save:[5,7,10,19,22],save_param:[5,6,7,22],scalar:[14,21,22,25],scale:[5,8,10,19],scatter:[19,21],schedul:10,scratch:4,search:[10,19,26],second:[5,7,8,22,23],see:[3,5,6,7,10,12,19,22,25,26],seed:[1,3,5,6,7,17,18,19,22,26],seem:26,select:[5,10,22],self:[4,22,23],semant:[2,11,19],sens:6,separ:[4,7,25,26],sequenc:[7,26],sequenti:6,sess:[1,4,17,18,24],session:[1,4,17,18,19,22,24,26],session_config:[19,26],set:[1,3,4,5,6,7,8,10,14,19,21,22,23,24,25,26],set_color:6,set_xlabel:5,set_ylabel:5,setter:4,setup:[1,4,24],sever:[19,21,25],shall:19,shaoq:8,shape:[3,4,5,6,7,8,21,22,24,25,26],shape_in:[7,24],shape_out:24,share:19,sharei:5,sharex:5,should:[1,3,4,5,6,8,10,15,17,18,19,20,22,24,25],shouldn:22,show:[3,4,5,25],shown:6,shuffl:[22,25,26],shutil:4,side:[1,14,15,17,18,19,23],side_effect:23,sig:[10,21],sig_idx:10,sig_map:[10,21],sigma:[7,8],sigmoid:[7,15],sigmoidbuild:15,sign:19,signal:[0,1,3,7,10,11,14,15,17,18,19,23],signal_io_dict:10,signaldict:[1,14,15,17,18,21],signatur:22,signific:[10,19],significantli:[3,5,6,12,15,18,22],sim:[3,4,5,6,7,13,19,22,24,25],simbcm:14,simbcmbuild:14,similar:[5,6,7,25],similarli:[4,24,25],simneuron:15,simneuronsbuild:[15,22],simoja:14,simojabuild:14,simp:14,simpesbuild:14,simpl:[4,5,22],simpler:6,simpli:[13,22],simplic:25,simplifi:[7,19],simplificaton:19,simprocess:18,simprocessbuild:[18,22],simpyfunc:[17,19],simpyfuncbuild:17,simtensornod:17,simtensornodebuild:17,simul:[1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,23,24,26],simulationdata:22,simulationerror:26,simultan:[22,23],simvoja:14,simvojabuild:14,sin:[3,4,13],sinc:[3,6,7,10,19],singl:[1,5,10,22,23],site:7,sixth:5,size:[3,10,19,21,22,26],size_in:[3,4,19,22,24,25],size_out:[4,19,22,24,25],skip:10,slice:[10,19,21],slightli:[5,19],slim:4,slot:19,slow:[5,10,15,18,22],slower:8,small:[4,5,6,19,22],smooth:[7,8],smoothli:24,soft_reset:22,softlif:7,softlif_neuron:7,softlifr:[7,8,15,19],softlifratebuild:15,softmax:4,softmax_cross_entropy_with_logit:7,softwar:19,some:[3,4,5,6,7,8,10,13,19,20,21,22,24,25,26],someth:[4,10,25],sort:[4,10,19],sort_ops_by_sign:10,sort_signals_by_op:10,sorted_ind:4,sorted_read:10,sourc:[1,8,10,12,14,15,17,18,19,21,22,23,24,26],sp_:5,sp_input:5,sp_probe:5,spa:[5,6],spa_retrieval_param:6,spaniel:4,spars:19,sparsedotincbuild:17,speak:22,specif:[6,22,25],specifi:[3,4,5,6,7,10,19,22,23,25],speed:[7,12,13,19,22],sphinx:19,sphinx_rtd_them:19,sphinxcontrib:19,spike:[2,8,11,19,24,25],spikingrectifiedlinear:[15,19],spikingrectifiedlinearbuild:15,springer:4,sqrt:8,squar:[3,5,6,7,22,25],src:21,stabil:[5,19],stabl:5,stage:[4,10,23],standard:[5,8,13,19,22,25],start:[5,20,21,22,26],stat:4,state:[4,8,19,22],statement:26,statist:8,statu:[19,22],stddev:8,step:[1,4,5,6,10,19,21,22,23,25,26],step_block:19,step_math:8,still:[22,25],stochast:22,stop:[4,21,26],storag:5,store:[5,10,21,25],str:[6,7,10,14,21,22,24,26],strang:19,stride:[7,19],string:[10,25,26],structur:[2,3,10,11,22,25,26],style:[19,24],sub:[15,18,26],subfold:22,subnet:25,subnetwork:[19,25],subplot:[5,7],subsequ:[19,22],subset:[21,26],substanti:19,substitut:8,subsum:19,success:6,successfulli:[4,5,6],suffix:25,sum:[6,19,25],summari:[19,22],summat:6,sun:8,support:[12,19,21],suppos:[4,25,26],surpass:8,sussex:4,swap:[7,19],symbol:[6,23],synaps:[3,4,5,6,7,13,18,19,24],synapt:[5,14],syntact:7,syntax:[4,7,19,24],sys:4,system:[5,6,19,22,23,25],t10k:7,t_int:5,t_mem:5,t_run:5,t_step:[5,6],tab:25,tag:[14,17],take:[3,4,6,7,8,13,19,20,21,22,24,25],tar:4,target:[3,5,6,7,10,19,22,23,26],target_func:3,task:[5,6,7,19,25],tau:5,tau_rc:[7,8],tau_ref:[7,8],technic:22,techniqu:[3,7],tempfil:19,tempor:[2,3,11,25],temporari:19,tend:[3,8],tensor:[1,4,7,14,15,17,18,19,21,22,23,24,25,26],tensor_func:24,tensor_graph:[19,23],tensor_lay:[7,19,24],tensor_nod:[17,24],tensorboard:[19,25],tensorboard_dir:[22,25],tensorflow:[0,1,2,3,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,24,25,26],tensorfuncparam:19,tensorgraph:23,tensornod:[4,7,9,11,19],tensorsign:[10,21],term:6,termin:19,test:[4,5,6,7,19],test_cu:[5,6],test_fil:5,test_input:[5,6,7],test_inputs_tim:7,test_output:5,test_rol:5,test_target:[5,6,7],test_targets_tim:7,test_trac:6,test_vocab:[5,6],text:3,tf_neuron_impl:15,tf_process_impl:18,than:[3,4,5,6,7,8,14,19,22,25],thei:[1,7,8,10,19,21,23,24,25,26],them:[2,3,5,7,10,19,26],therefor:[10,14],thi:[1,3,4,5,6,7,8,10,12,13,14,15,17,18,19,21,22,24,25,26],thing:[1,3,4,5,6,7,22,24],think:[19,25],third:3,those:[1,5,7,10,19,22,23,25],thread:26,three:[3,5,22],threshold:8,through:[3,5,6,10,13,19,22,23,25,26],throughout:22,thumb:3,tile:7,time:[1,3,4,5,6,7,8,10,17,18,19,21,22,23,24,25,26],time_in_second:22,timestep:[1,3,4,7,14,15,17,18,22,23,24,26],titl:7,tmp:4,togeth:[5,6,10],toler:22,tool:[0,3,11,19],toolkit:3,top:[4,19,25,26],tort:19,total:[5,19,25],trace:[5,6,22],trace_:6,trace_inp:6,trace_kei:6,trace_ptr:6,track:[19,22,25,26],tracker:20,tractori:5,train:[3,4,5,6,7,8,9,11,13,19,22,26],train_bind:5,train_cu:[5,6],train_fil:5,train_input:[5,6,7],train_memori:5,train_output:[5,6],train_rol:5,train_target:[5,6,7],train_trac:6,trainabl:[7,19,22,23,25,26],trained_encod:22,training_step:19,trajectori:5,tran:10,trang:[3,4,5,7,22],transform:[5,7,8,24],transit:[10,19],transitive_closure_recurs:10,transitive_plann:10,translat:1,tree:[4,10],tree_plann:[10,19],tri:25,truncat:[19,22,26],truncatednorm:8,tumbolia:19,tune:[5,7,8],tuning_curv:7,tupl:[1,10,21,24,26],turn:25,tutori:[5,19],two:[5,8,9,22,25],txt:12,type:[0,4,10,11,14,16,18,19,21,22,24],ubuntu:12,ubyt:7,uint8:4,unchang:[21,25],under:[13,19],underli:[7,13],underpin:21,understand:8,uneven:19,uniform:[3,7,8],unintend:25,uniqu:[13,22],unit:[7,8,19],unknown:26,unless:23,unnecessarili:19,unord:10,unrol:[22,23],unroll_simul:[7,19,23],until:[22,25],untrunc:25,updat:[1,7,10,12,14,15,17,18,19,21,22,23,25,26],upload:4,upper:[6,7],url:4,urllib:[4,5,6,7],urlopen:4,urlretriev:[5,6,7],usag:[10,19,22,25],use:[3,4,5,6,7,8,10,13,19,20,21,22,23,25,26],use_nesterov:[3,25],used:[1,3,4,6,7,8,9,10,14,15,17,18,19,21,22,23,24,25],useful:[6,8,19,22,25],user:[0,11,13,19,22,23,25],uses:[3,10,19,22,23],using:[3,4,5,6,7,10,12,13,19,22,23,24,25,26],usual:[7,8,22,25],util:[0,7,11,19,23,24,25],val:21,valid:[10,26],valu:[1,3,5,7,8,10,17,19,21,22,24,25,26],vari:5,variabl:[1,4,6,17,18,19,21,22,24,26],varianc:8,variancesc:[8,19],variat:22,variou:[3,5,22],vector:[4,5,6,7,22,24],veri:[4,6,10,12,22,24,25],verifi:22,version:[5,6,7,8,10,12,19],via:[9,19,22,25],view:[10,19,21,22,25],vision:4,visual:[5,6,10,22,24,25],vocab:[5,6],vocabulari:[5,6],voltag:8,w_ok:4,wai:[6,19,22,24],want:[3,4,5,7,10,12,19,22,25,26],warn:7,warranti:19,wasn:22,web:[22,25],weight:[3,4,5,7,8,14,19,22,23,24,25],weighted_ms:5,welcom:19,well:[5,25],welsh:4,were:[19,25],what:[5,6,13,25,26],whatev:[1,3,14,15,17,18],when:[3,4,5,7,8,10,12,19,22,24,25,26],whenev:[4,24,26],where:[2,3,4,5,6,7,8,10,14,19,21,22,25],whether:[8,19,21,23,25,26],which:[1,3,4,5,6,7,10,11,12,15,18,19,21,22,23,26],white:3,whitesign:3,who:19,whole:[5,19],whose:[8,22],why:6,wide:4,widget:26,wikimedia:4,wikipedia:4,win:10,window:12,with_self:23,within:[10,19,21,22,23],without:[10,19],won:[6,21],work:[3,4,5,6,7,12,13,19,22,24,25,26],wors:25,worthwhil:22,would:[2,4,5,6,7,13,19,22,25,26],wouldn:10,wrap:[23,26],wrapper:7,write:[7,10,21],written:7,wrong:12,wrt:22,www:19,x_p:3,xavier:8,xdist:19,xiangyu:8,xlabel:[3,5,6,7],y_p:3,yet:19,yield:26,ylabel:[3,5,6,7],ylim:[5,6],yoshua:8,you:[2,4,5,6,7,12,19,20,22,25],your:[5,7,12,19,22,25],yourself:[2,5,6,7,25],z_p:3,zero:[5,6,8,10,19,22],zhang:8,zip:[5,6,7],zipfil:[5,6,7]},titles:["Developer documentation","Builder","Examples","Optimizing the parameters of a Nengo model","Inserting a TensorFlow network into a Nengo model","Optimizing a structured semantic pointer model with temporal dynamics","Optimizing a structured semantic pointer model","Optimizing spiking neural networks","Extra Nengo objects","User documentation","Operator graph optimization tools","NengoDL","Installation","NengoDL: Deep learning integration for Nengo","Learning rules","Neuron types","Operator build classes","Basic operators","Processes","Project information","Additional resources","Signals","NengoDL Simulator","TensorFlow graph construction","TensorNodes","Optimizing a NengoDL model","Miscellaneous utilities"],titleterms:{"class":16,addit:20,agreement:19,api:[22,24],april:19,argument:[22,25],august:19,basic:17,build:16,builder:1,choos:25,code:19,construct:23,contribut:19,contributor:19,decemb:19,deep:13,develop:[0,12],devic:22,distribut:8,document:[0,9,13],dtype:22,dynam:5,element:25,exampl:[2,24,25],extra:8,file:19,graph:[10,23],histori:19,inform:19,input:25,input_fe:22,insert:4,instal:12,integr:13,issu:19,juli:19,june:19,learn:[13,14],licens:19,mai:19,make:19,march:19,memori:5,minibatch_s:22,miscellan:26,model:[3,4,5,6,25],nengo:[3,4,8,13],nengodl:[11,12,13,19,22,25],network:[4,5,7],neural:7,neuron:[8,15],object:[8,25],octob:19,oper:[10,16,17],optim:[3,5,6,7,10,25],other:25,paramet:[3,25],pointer:[5,6],process:18,profil:22,project:19,pull:19,releas:19,request:19,requir:12,resourc:20,retriev:5,rule:14,run:22,semant:[5,6],signal:21,simul:[22,25],spike:7,structur:[5,6],summari:25,target:25,tempor:5,tensorboard:22,tensorflow:[4,12,23],tensornod:24,tool:10,train:25,truncat:25,type:[8,15],unroll_simul:22,user:9,util:26,which:25}})