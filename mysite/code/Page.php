<?php
class Page extends SiteTree {

	public static $db = array(
		"InheritSidebarItems" => "Boolean"
	);

	public static $has_one = array(
	);
	
	
	public static $many_many = array (
		"SidebarItems" => "SidebarItem"
	);
	
    public static $many_many_extraFields=array(
        'SidebarItems'=>array(
            'SortOrder'=>'Int'
        )
    );
	
	public static $defaults = array (
	
		"InheritSidebarItems" => "1",
	
		"Content" => 
			"<h1>H1. This is a very large header.</h1>
<p>The first paragraph directly after an H1 is the lede paragraph and is styled with a larger font size than other paragraphs.</p>
<h2>H2. This is a large header.</h2>
<p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient.</p>
<h3>H3. This is a medium header.</h3>
<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa justo.</p>
<h4>H4. This is a moderate header.</h4>
<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl.</p>
<h5>H5. This is small header.</h5>
<p>Cum sociis natoque penatibus magnis parturient montes, nascetur ridiculus mus. Sed consectetur est.</p>
<h6>H6. This is very small header.</h6>
<p>Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.</p>"
	
	);
	
	
	public function getCMSFields(){
		$f = parent::getCMSFields();
		
		$gridFieldConfig = GridFieldConfig_RelationEditor::create();
		$gridFieldConfig->addComponent(new GridFieldManyRelationHandler(), 'GridFieldPaginator');
		//$gridFieldConfig->addComponent(new GridFieldSortableRows('SortOrder'));

		$gridField = new GridField("SidebarItems", "Sidebar Items", $this->SidebarItems(), $gridFieldConfig);
		
		$f->addFieldToTab("Root.Sidebar", new LabelField("SidebarLabel", "<h2>Add sidebar items below</h2>"));
		
	/*	if($this->getParent()){
		$f->addFieldToTab("Root.Sidebar", new CheckboxField("InheritSidebarItems", "Inherit parent page's sidebar items"));
		}*/
		$f->addFieldToTab("Root.Sidebar", $gridField); // add the grid field to a tab in the CMS	
		
		return $f;
	}
	
	
    public function SidebarItems() {
        return $this->getManyManyComponents('SidebarItems')->sort('SortOrder');
    }
	/*public function inheritedSidebarItems(){
	
		$items = array();
		
		if($this->getParent()){

			$parent = $this->getParent();
			$parent_items = $parent->SidebarItems();
			
			foreach($parent_items as $parent_item){
				$items[] = $parent_item;
			}

		}else{		
			//echo $this->Title." is parentless";
			$items = $this->SidebarItems()->toArray();	
				
		}
		
		$itemList = new ArrayList($items);
		
		return $itemList;
		
	}*/
	
	/*public function getAllSidebarItems(){
	
		$items = array();
		
		$items[] = $this->SidebarItems()->toArray();
		if(!$this->getParent()){
		
			return $items;
			
		}else if($this->InheritSidebarItems){
		
					}
			
		return $items;
		
	}*/

}
class Page_Controller extends ContentController {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	public static $allowed_actions = array (
	);

	public function init() {
		parent::init();

		// Note: you should use SS template require tags inside your templates 
		// instead of putting Requirements calls here.  However these are 
		// included so that our older themes still work
		Requirements::themedCSS('reset');
		Requirements::themedCSS('layout'); 
		Requirements::themedCSS('typography'); 
		Requirements::themedCSS('form'); 
	}
	
	/* Clear Out Empty Lines from SS Template Indents */
	/*public function handleRequest(SS_HTTPRequest $request, DataModel $model) { 
		$ret = parent::handleRequest($request, $model); 
		$temp=$ret->getBody(); 
		$temp = preg_replace("/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/", "\n", $temp); 
		$ret->setBody($temp); 
		return $ret; 
	} */

}