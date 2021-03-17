Jekyll::Hooks.register :site, :post_write do |site|
  
  Dir.glob(File.join(site.dest, '**/*.html')) do |original_file_path|
    
    api_file_path = original_file_path.sub(site.dest, File.join(site.dest, 'api')).sub('.html', '.json')
    api_file_dir = File.dirname(api_file_path)
    FileUtils.mkdir_p(api_file_dir) unless File.exist?(api_file_dir)
    original_content = File.read(original_file_path)
    api_content = original_content.split('<main>').last.split('</main>').first
    title = original_content.split('<title>').last.split('</title>').first
    page_data = {
      'title': title,
      'content': api_content,
    }
    
    File.open(api_file_path, 'w') do |raw_file|
      raw_file.write(page_data.to_json)
    end
  
  end

end